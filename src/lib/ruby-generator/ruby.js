/**
 * Define Ruby code generator for Ruby Blocks
 * @param {RubyGenerator} Generator The RubyGenerator
 * @return {RubyGenerator} same as param.
 */
export default function (Generator) {
    const getUnquoteText = function (block, fieldName, order) {
        const input = block.inputs[fieldName];
        if (input) {
            const targetBlock = Generator.getBlock(input.block);
            if (targetBlock && targetBlock.opcode === 'text') {
                return Generator.getFieldValue(targetBlock, 'TEXT') || '';
            }
        }
        return Generator.valueToCode(block, fieldName, order);
    };

    Generator.ruby_statement = function (block) {
        const statement = getUnquoteText(block, 'STATEMENT', Generator.ORDER_NONE);
        return `${statement}\n`;
    };

    Generator.mrubyc_wifi_enterprise = function (block) {
        const ssid = Generator.valueToCode(block, 'SSID', Generator.ORDER_NONE);
        const username = Generator.valueToCode(block, 'USERNAME', Generator.ORDER_NONE);
        const pass = Generator.valueToCode(block, 'PASSWORD', Generator.ORDER_NONE);
        return `initialize_wifi(0,${ssid},${username},${pass})\n`;
    };

    Generator.mrubyc_wifi_personal = function (block) {
        const ssid = Generator.valueToCode(block, 'SSID', Generator.ORDER_NONE);
        const pass = Generator.valueToCode(block, 'PASSWORD', Generator.ORDER_NONE);
        return `initialize_wifi(1,${ssid},${pass})\n`;
    };

    Generator.mrubyc_gpio_init_output = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        return `gpio_init_output(${pin})\n`;
    };

    Generator.mrubyc_gpio_init_input = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        return `gpio_init_input(${pin})\n`;
    };

    Generator.mrubyc_i2c_lcd_init = function (block) {
        return `i2c = GpioTest.new(22, 21)\ni2c.i2c_init\ni2c.lcd_init\n`;
    };

    Generator.mrubyc_init_adc = function (block) {
        return `init_adc\n`;
    };
    
    Generator.mrubyc_sht_init = function (block) {
        const object = Generator.getFieldValue(block, 'SHT') || null;
        return `sht = GpioTest.new(${object})\nsht.sht_init\n`;
    };

    Generator.mrubyc_gpio_set_level = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        const state = Generator.getFieldValue(block, 'STATE') || null;
        return `gpio_set_level(${pin},${state})\n`;
    };

    Generator.mrubyc_sw_state = function (block) {
        const SW = Generator.getFieldValue(block, 'SW') || null;
        return [`gpio_get_level(${SW})`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_gpio_sound = function (block) {
        const sound = Generator.getFieldValue(block, 'SOUND') || null;
        const time = Generator.valueToCode(block, 'TIME', Generator.ORDER_NONE);
        return `gpio_sound(15,${sound},${time})\n`;
    };

    Generator.mrubyc_read_adc = function (block) {
        return [`1.to_f / ( 1.to_f / 3435 * Math.log(((3300 - read_adc).to_f / ((read_adc).to_f/ 10_000)) / 10_000) + 1.to_f / (25 + 273) ) - 273`, Generator.ORDER_ATOMIC];
    };
    
    Generator.mrubyc_sht_get_temp = function (block) {
        return [`sht.sht_get_temp / 100.0`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_sht_get_humi = function (block) {
        const temp = Generator.valueToCode(block, 'TEMP', Generator.ORDER_NONE);
        return [`sht.sht_get_humi(${temp})`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_i2c_rtc_get_time = function (block) {
        return [`i2c.rtc_get_time`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_i2c_lcd_write = function (block) {
        const line = Generator.getFieldValue(block, 'LINE') || null;
        const text = Generator.valueToCode(block, 'TEXT', Generator.ORDER_NONE);
        return `${line}i2c.lcd_write(0x40, sprintf(${text}))\n`;
    };

    Generator.mrubyc_i2c_lcd_write_var = function (block) {
        const line = Generator.getFieldValue(block, 'LINE') || null;
        const text = Generator.valueToCode(block, 'TEXT', Generator.ORDER_NONE);
        const hensu = Generator.valueToCode(block, 'VAR', Generator.ORDER_NONE);
        return `${line}i2c.lcd_write(0x40, sprintf(${text},${hensu}))\n`;
    };

    Generator.mrubyc_i2c_lcd_clean = function (block) {
        return `i2c.lcd_write(0x00, [ 0x01, 0x80 ] )\n` +
               `i2c.lcd_write(0x40, sprintf("        "))\n` +
               `i2c.lcd_write(0x00, [ 0x80 + 0x40 ] )\n` +
               `i2c.lcd_write(0x40, sprintf("        "))\n`;
    };

    Generator.mrubyc_ambient_send_to = function (block) {
        const id = Generator.valueToCode(block, 'ID', Generator.ORDER_NONE);
        const rkey = Generator.valueToCode(block, 'RKEY', Generator.ORDER_NONE);
        const wkey = Generator.valueToCode(block, 'WKEY', Generator.ORDER_NONE);
        return  `ambient_client_id = ${id}\n` +
                `ambient_read_key = ${rkey}\n` +
                `ambient_write_key = ${wkey}\n` +
                `url = "http://ambidata.io/api/v2/channels/#{ambient_client_id}/data"\n`;
    };

    Generator.mrubyc_ambient_add_data = function (block) {
        const d1 = Generator.getFieldValue(block, 'D1') || null;
        const data1 = Generator.valueToCode(block, 'DATA1', Generator.ORDER_NONE);
        const d2 = Generator.getFieldValue(block, 'D2') || null;
        const data2 = Generator.valueToCode(block, 'DATA2', Generator.ORDER_NONE);
        return `data = "{\n` +
                  `\\\"writeKey\\\": \\\"#{ambient_write_key}\\\",\n` +
                  `\\\"${d1}\\\": #{${data1}},\n` +
                  `\\\"${d2}\\\": #{${data2}}\n` +
                `}".tr("\\n", "")\n`
    };

    Generator.mrubyc_ambient_data_send = function (block) {
        return  `connected = check_network_status()\n` + 
                `if connected\n` +
                `  http_client_init(url)\n` +
                `  http_client_set_header("Content-Type", "application/json")\n` +
                `  http_client_set_header("Connection", "close")\n` +
                `  http_client_set_post_field(data)\n` +
                `  get_http_response()\n` +
                `  http_client_cleanup()\n` +
                `end\n`;
    };    

    Generator.mrubyc_while = function (block) {
        const buf = getUnquoteText(block, 'CONDITION', Generator.ORDER_NONE);
        const branch = Generator.statementToCode(block, 'SUBSTACK') || '';
        return `while ${buf} do\n${branch}end\n`;
    };
    
    Generator.mrubyc_puts = function (block) {
        const output = getUnquoteText(block, 'OUTPUT', Generator.ORDER_NONE);
        return `puts "${output}"\n`;
    };

    Generator.mrubyc_puts_var = function (block) {
        const output = getUnquoteText(block, 'OUTPUT', Generator.ORDER_NONE);
        return `puts ${output}\n`;
    };

    Generator.ruby_statement_with_block = function (block) {
        const statement = getUnquoteText(block, 'STATEMENT', Generator.ORDER_NONE);
        let args = getUnquoteText(block, 'ARGS', Generator.ORDER_NONE);
        if (args.length > 0) {
            args = ` ${args}`;
        }
        const branch = Generator.statementToCode(block, 'SUBSTACK') || '';
        return `${statement} do${args}\n${branch}end\n`;
    };

    Generator.ruby_expression = function (block) {
        const expression = getUnquoteText(block, 'EXPRESSION', Generator.ORDER_NONE);
        return [expression, Generator.ORDER_ATOMIC];
    };

    Generator.ruby_range = function (block) {
        const fromNum = Generator.valueToCode(block, 'FROM', Generator.ORDER_RANGE) || 1;
        const toNum = Generator.valueToCode(block, 'TO', Generator.ORDER_RANGE) || 10;
        return [`${fromNum}..${toNum}`, Generator.ORDER_FUNCTION_CALL];
    };

    Generator.ruby_exclude_range = function (block) {
        const fromNum = Generator.valueToCode(block, 'FROM', Generator.ORDER_RANGE) || 1;
        const toNum = Generator.valueToCode(block, 'TO', Generator.ORDER_RANGE) || 10;
        return [`${fromNum}...${toNum}`, Generator.ORDER_FUNCTION_CALL];
    };

    return Generator;
}
