/**
 * * Define Tester code generator for Ruby Blocks
 * * @param {RubyGenerator} Generator The RubyGenerator
 * * @return {RubyGenerator} same as param.
 * */
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

    Generator.second_choose_number = function (block) {
        const choose_number = getUnquoteText(block, 'choose_number', Generator.ORDER_NONE);
        return `#テスト番号${choose_number}を選択する\n` +
        `ok = ramdump_write(TEST_NO, TEST_${choose_number})\n` +
        `if ok == false then\n` +
        `   out_console_exit(__FILE__,__LINE__)\n` +
        `   exit\n` +
        `end\n` +
        `\n`;
    };

    Generator.second_load_output_off = function (block) {
        return `#疑似負荷出力OFF\n` +
        `ok = CA150_output_OFF()\n`
        ;
    };
    
    Generator.second_resistance_output = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period = Generator.getFieldValue(block, 'num_period') || null;
        if (num_main == 0) {
            return `#抵抗出力(ohm)\n` +
            `ok = CA150_output_registor(${num_period}) #[0.1 ohm]\n` 
            ;
        }
        else {
            return `#抵抗出力(ohm)\n` +
            `ok = CA150_output_registor(${num_main}${num_period}) #[0.1 ohm]\n` 
            ;
        }
    };

    Generator.second_resistance_output_k = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period_1 = Generator.getFieldValue(block, 'num_period_1') || null;
        const num_period_2 = Generator.getFieldValue(block, 'num_period_2') || null;
        const num_period_3 = Generator.getFieldValue(block, 'num_period_3') || null;
        if (num_main == 0) {
            if (num_period_1 == 0) {
                if (num_period_2 == 0) {
                    return `#抵抗出力(ohm)\n` +
                    `ok = CA150_output_registor(${num_period_3}0) #[0.1 ohm]\n`
                    ;
                }
                else {
                    return `#抵抗出力(ohm)\n` +
                    `ok = CA150_output_registor(${num_period_2}${num_period_3}0) #[0.1 ohm]\n` 
                    ;
                }  
            }
            else {
                return `#抵抗出力(ohm)\n` +
                `ok = CA150_output_registor(${num_period_1}${num_period_2}${num_period_3}0) #[0.1 ohm]\n`
                ;
            }
        }
        else {
            return `#抵抗出力(ohm)\n` +
            `ok = CA150_output_registor(${num_main}${num_period_1}${num_period_2}${num_period_3}0) #[0.1 ohm]\n`
            ;
        }
    };

    Generator.second_voltage_output_m = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period_1 = Generator.getFieldValue(block, 'num_period_1') || null;
        const num_period_2 = Generator.getFieldValue(block, 'num_period_2') || null;
        const num_period_3 = Generator.getFieldValue(block, 'num_period_3') || null;
        if (num_main == 0) {
            if (num_period_1 == 0) {
                if (num_period_2 == 0) {
                    return `#電圧出力(mV)\n` +
                    `ok = CA150_output_mV(${num_period_3}) #[0.001 mV]\n` 
                    ;
                }
                else {
                    return `#電圧出力(mV)\n` +
                    `ok = CA150_output_mV(${num_period_2}${num_period_3}) #[0.001 mV]\n` 
                    ;
                }
            }
            else {
                return `#電圧出力(mV)\n` +
                `ok = CA150_output_mV(${num_period_1}${num_period_2}${num_period_3}) #[0.001 mV]\n`
                ;
            }
        }
        else {
            return `#電圧出力(mV)\n` +
            `ok = CA150_output_mV(${num_main}${num_period_1}${num_period_2}${num_period_3}) #[0.001 mV]\n` 
            ;
        }
    };

    Generator.second_voltage_output = function (block) {
        const num_main = Generator.getFieldValue(block, 'num_main') || null;
        const num_period_1 = Generator.getFieldValue(block, 'num_period_1') || null;
        const num_period_2 = Generator.getFieldValue(block, 'num_period_2') || null;
        const num_period_3 = Generator.getFieldValue(block, 'num_period_3') || null;
        if (num_main == 0) {
            if (num_period_1 == 0) {
                if (num_period_2 == 0) {
                    return `#電圧出力(V)\n` +
                    `ok = CA150_output_V(${num_period_3}) #[0.001 V]\n` 
                    ;
                }
                else {
                    return `#電圧出力(V)\n` +
                    `ok = CA150_output_V(${num_period_2}${num_period_3}) #[0.001 V]\n`
                    ;
                }
            }
            else {
                return `#電圧出力(V)\n` +
                `ok = CA150_output_V(${num_period_1}${num_period_2}${num_period_3}) #[0.001 V]\n` 
                ;
            }
        }
        else {
            return `#電圧出力(V)\n` +
            `ok = CA150_output_V(${num_main}${num_period_1}${num_period_2}${num_period_3}) #[0.001 V]\n` 
            ;
        }
    };

    Generator.second_current_output_m = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period_1 = Generator.getFieldValue(block, 'num_period_1') || null;
        const num_period_2 = Generator.getFieldValue(block, 'num_period_2') || null;
        const num_period_3 = Generator.getFieldValue(block, 'num_period_3') || null;
        if (num_main == 0) {
            if (num_period_1 == 0) {
                if (num_period_2 == 0) {
                    return `#電流出力(mA)\n` +
                    `ok = CA150_output_ampare(${num_period_3}) #[0.001mA]\n` 
                    ;
                }
                else {
                    return `#電流出力(mA)\n` +
                    `ok = CA150_output_ampare(${num_period_2}${num_period_3}) #[0.001mA]\n` 
                    ;
                }
            }
            else {
                return `#電流出力(mA)\n` +
                `ok = CA150_output_ampare(${num_period_1}${num_period_2}${num_period_3}) #[0.001mA]\n`
                ;
            }
        }
        else {
            return `#電流出力(mA)\n` +
            `ok = CA150_output_ampare(${num_main}${num_period_1}${num_period_2}${num_period_3}) #[0.001mA]\n`
            ;
        }
    };

    Generator.second_pt_output = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period = Generator.getFieldValue(block, 'num_period') || null;
        if (num_main == 0) {
            return `#Pt100 出力(℃)\n` +
            `ok = CA150_output_Pt100(${num_period}) #[0.1℃]\n`
            ;
        }
        else {
            return `#Pt100 出力(℃)\n` +
            `ok = CA150_output_Pt100(${num_main}${num_period}) #[0.1℃]\n`
            ;
        } 
    };

    Generator.second_k_output = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period = Generator.getFieldValue(block, 'num_period') || null;
        if (num_main == 0) {
            return `#K 熱電対出力(℃)\n` +
            `ok = CA150_output_Kterm(${num_period}) #[0.1℃]\n` 
            ;
        }
        else {
            return `#K 熱電対出力(℃)\n` +
            `ok = CA150_output_Kterm(${num_main}${num_period}) #[0.1℃]\n`
            ;
        } 
    };

    Generator.second_expression = function (block) {
        const order = Generator.ORDER_FUNCTION_CALL;
        const ok_ng = Generator.getFieldValue(block, 'ok_ng') || null;
        return [`ok == ${ok_ng}`,order];
    };
}