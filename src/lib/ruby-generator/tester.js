/**
 * Define Tester code generator for Ruby Blocks
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

    Generator.init_figure_number = function (block) {
        const figure_number = getUnquoteText(block, 'figure_number', Generator.ORDER_NONE);
        return `require "./${figure_number}.rb"\n`;
    };

    Generator.measure_range_check = function (block) {
        const measure = Generator.getFieldValue(block, 'measure') || null;
        const range_first = getUnquoteText(block, 'range_first', Generator.ORDER_NONE);
        const range_last = getUnquoteText(block, 'range_last', Generator.ORDER_NONE);
        return `#測定値範囲チェック(ohm)\n` +
        `ok, value = ramdump_read(VALUE_${measure})\n` +
        `puts sprintf(“VALUE_${measure}:%d”, value)\n` +
        `exit if ok == false\n` +
        `exit if (value < ${range_first}) or (value > ${range_last})\n`;
    };

    Generator.choose_number = function (block) {
        const choose_number = getUnquoteText(block, 'choose_number', Generator.ORDER_NONE);
        return `# テスト番号${choose_number}を選択する\n` +
        `ok = ramdump_write(TEST_NO, TEST_${choose_number})\n` +
        `exit if ok == false\n` +
        `ok = ramdump_write(DUMP_KEY, KEY_SET)\n` +
        `exit if ok == false\n`;
    };

    return Generator;
}