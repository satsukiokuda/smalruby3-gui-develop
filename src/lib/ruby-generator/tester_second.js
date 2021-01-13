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

    Generator.second_init_figure_number = function (block) {
        const figure_number = getUnquoteText(block, 'figure_number', Generator.ORDER_NONE);
        return `require "./${figure_number}.rb"\n` + 
        `\n`;
    };

    Generator.second_choose_number = function (block) {
        const choose_number = getUnquoteText(block, 'choose_number', Generator.ORDER_NONE);
        const value = getUnquoteText(block, 'value', Generator.ORDER_NONE);
        return `${value} = ramdump_write(TEST_NO, TEST_${choose_number})\n`;
    };

    Generator.second_choose_item = function (block) {
        const choose_item = getUnquoteText(block, 'choose_item', Generator.ORDER_NONE);
        const value2 = getUnquoteText(block, 'value2', Generator.ORDER_NONE);
        return `${value2} = ramdump_write(TEST_SUB, ${choose_item})\n`;
    };

    Generator.second_test_mode = function (block) {
        const value3 = getUnquoteText(block, 'value3', Generator.ORDER_NONE);
        return `${value3} = ramdump_write(FLG_MAIN, 2)\n`;
    };

    Generator.second_key_push = function (block) {
        const key_push = Generator.getFieldValue(block, 'key_push') || null;
        const value4 = getUnquoteText(block, 'value4', Generator.ORDER_NONE);
        return `${value4} = ramdump_write(DUMP_KEY, ${key_push})\n`;
    };

    Generator.second_tester_test_result = function (block) {
        const test_result = Generator.getFieldValue(block, 'test_result') || null;
        const value5 = getUnquoteText(block, 'value5', Generator.ORDER_NONE);
        const value6 = getUnquoteText(block, 'value6', Generator.ORDER_NONE);
        return `${value5},${value6} = ramdump_read(TEST_RESULT)\n`;
    };

    Generator.second_test_exit = function (block) {
        return `out_console_exit(__FILE__,__LINE__)\n` + `exit\n`
        ;
    };

    Generator.second_test_finish = function (block) {
        return `out_console_finish()\n` + `exit\n`
        ;
    };

    Generator.second_set_clock = function (block) {
        const time_type = Generator.getFieldValue(block, 'time_type') || null;
        const time_var = getUnquoteText(block, 'time_var', Generator.ORDER_NONE);
        const value9 = getUnquoteText(block, 'value9', Generator.ORDER_NONE);
        return `${value9} = ramdump_write(${time_type}, ${time_var})\n`;
    };

    Generator.second_measure_check = function (block) {
        const measure = Generator.getFieldValue(block, 'measure') || null;
        const value7 = getUnquoteText(block, 'value7', Generator.ORDER_NONE);
        const value8 = getUnquoteText(block, 'value8', Generator.ORDER_NONE);
        return `${value7},${value8} = ramdump_read(VALUE_${measure})\n`;
    };

    Generator.second_load_output_off = function (block) {
        const value10 = getUnquoteText(block, 'value10', Generator.ORDER_NONE);
        return `${value10} = CA150_output_OFF()\n`;
    };
    
    Generator.second_resistance_output = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period = Generator.getFieldValue(block, 'num_period') || null;
        const value11 = getUnquoteText(block, 'value11', Generator.ORDER_NONE);
        if (num_main == 0) {
            return `${value11} = CA150_output_registor(${num_period})\n`;
        }
        else {
            return `${value11} = CA150_output_registor(${num_main}${num_period})\n`; 
        }
    };

    Generator.second_resistance_output_k = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period_1 = Generator.getFieldValue(block, 'num_period_1') || null;
        const num_period_2 = Generator.getFieldValue(block, 'num_period_2') || null;
        const num_period_3 = Generator.getFieldValue(block, 'num_period_3') || null;
        const value12 = getUnquoteText(block, 'value12', Generator.ORDER_NONE);
        if (num_main == 0) {
            if (num_period_1 == 0) {
                if (num_period_2 == 0) {
                    return `${value12} = CA150_output_registor(${num_period_3}0)\n`;
                }
                else {
                    return `${value12} = CA150_output_registor(${num_period_2}${num_period_3}0)\n`;
                }  
            }
            else {
                return `${value12} = CA150_output_registor(${num_period_1}${num_period_2}${num_period_3}0)\n`;
            }
        }
        else {
            return `${value12} = CA150_output_registor(${num_main}${num_period_1}${num_period_2}${num_period_3}0)\n`;
            ;
        }
    };

    Generator.second_voltage_output_m = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period_1 = Generator.getFieldValue(block, 'num_period_1') || null;
        const num_period_2 = Generator.getFieldValue(block, 'num_period_2') || null;
        const num_period_3 = Generator.getFieldValue(block, 'num_period_3') || null;
        const value13 = getUnquoteText(block, 'value13', Generator.ORDER_NONE);
        if (num_main == 0) {
            if (num_period_1 == 0) {
                if (num_period_2 == 0) {
                    return `${value13} = CA150_output_mV(${num_period_3})\n`;
                }
                else {
                    return `${value13} = CA150_output_mV(${num_period_2}${num_period_3})\n`;
                }
            }
            else {
                return `${value13} = CA150_output_mV(${num_period_1}${num_period_2}${num_period_3})\n`;
            }
        }
        else {
            return `${value13} = CA150_output_mV(${num_main}${num_period_1}${num_period_2}${num_period_3})\n`;
        }
    };

    Generator.second_voltage_output = function (block) {
        const num_main = Generator.getFieldValue(block, 'num_main') || null;
        const num_period_1 = Generator.getFieldValue(block, 'num_period_1') || null;
        const num_period_2 = Generator.getFieldValue(block, 'num_period_2') || null;
        const num_period_3 = Generator.getFieldValue(block, 'num_period_3') || null;
        const value14 = getUnquoteText(block, 'value14', Generator.ORDER_NONE);
        if (num_main == 0) {
            if (num_period_1 == 0) {
                if (num_period_2 == 0) {
                    return `${value14} = CA150_output_V(${num_period_3})\n`; 
                }
                else {
                    return `${value14} = CA150_output_V(${num_period_2}${num_period_3})\n`; 
                }
            }
            else {
                return `${value14} = CA150_output_V(${num_period_1}${num_period_2}${num_period_3})\n`; 
            }
        }
        else {
            return `${value14} = CA150_output_V(${num_main}${num_period_1}${num_period_2}${num_period_3})\n`; 
        }
    };

    Generator.second_current_output_m = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period_1 = Generator.getFieldValue(block, 'num_period_1') || null;
        const num_period_2 = Generator.getFieldValue(block, 'num_period_2') || null;
        const num_period_3 = Generator.getFieldValue(block, 'num_period_3') || null;
        const value15 = getUnquoteText(block, 'value15', Generator.ORDER_NONE);
        if (num_main == 0) {
            if (num_period_1 == 0) {
                if (num_period_2 == 0) {
                    return `${value15} = CA150_output_ampare(${num_period_3})\n`; 
                }
                else {
                    return `${value15} = CA150_output_ampare(${num_period_2}${num_period_3})\n`; 
                }
            }
            else {
                return `${value15} = CA150_output_ampare(${num_period_1}${num_period_2}${num_period_3})\n`; 
            }
        }
        else {
            return `${value15} = CA150_output_ampare(${num_main}${num_period_1}${num_period_2}${num_period_3})\n`; 
        }
    };

    Generator.second_pt_output = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period = Generator.getFieldValue(block, 'num_period') || null;
        const value16 = getUnquoteText(block, 'value16', Generator.ORDER_NONE);
        if (num_main == 0) {
            return `${value16} = CA150_output_Pt100(${num_period})\n`;
        }
        else {
            return `${value16} = CA150_output_Pt100(${num_main}${num_period})\n`;
        } 
    };

    Generator.second_k_output = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period = Generator.getFieldValue(block, 'num_period') || null;
        const value17 = getUnquoteText(block, 'value17', Generator.ORDER_NONE);
        if (num_main == 0) {
            return `${value17} = CA150_output_Kterm(${num_period})\n`;
        }
        else {
            return `${value17} = CA150_output_Kterm(${num_main}${num_period})\n`;
        } 
    };

    Generator.second_connection_off = function (block) {
        const value18 = getUnquoteText(block, 'value18', Generator.ORDER_NONE);
        return `${value18} = GPIB_OFF()\n`;
        ;
    };

    Generator.second_connection_change = function (block) {
        const channel = Generator.getFieldValue(block, 'channel') || null;
        const value19 = getUnquoteText(block, 'value19', Generator.ORDER_NONE);
        return `${value19} = GPIB_output(CONNECT_CH${channel})\n`; 
    };

    Generator.second_expression = function (block) {
        const order = Generator.ORDER_LOGICAL_OR;
        const result = getUnquoteText(block, 'result', Generator.ORDER_NONE);
        const ok_ng = Generator.getFieldValue(block, 'ok_ng') || null;
        return [`${Generator.nosToCode(result)} == ${Generator.nosToCode(ok_ng)}`,order];
    };

    Generator.second_expression2 = function (block) {
        const order = Generator.ORDER_LOGICAL_OR;
        const result2 = getUnquoteText(block, 'result2', Generator.ORDER_NONE);
        const status = Generator.getFieldValue(block, 'status') || null;
        return [`${Generator.nosToCode(result2)} == ${Generator.nosToCode(status)}`,order];
    };

    Generator.second_double_var = function (block) {
        const var1 = getUnquoteText(block, 'var1', Generator.ORDER_NONE);
        const var2 = getUnquoteText(block, 'var2', Generator.ORDER_NONE);
        return [`${var1},${var2}`,Generator.ORDER_ATOMIC];
    };

    Generator.second_show = function (block) {
        const test_result = Generator.valueToCode(block, 'TEST_RESULT') || null;
        return `puts ${test_result}\n`;
    };

}