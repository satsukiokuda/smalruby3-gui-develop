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
        return [`ramdump_write(TEST_NO, TEST_${choose_number})`,Generator.ORDER_ATOMIC];
        ;
    };

    Generator.second_choose_item = function (block) {
        const choose_item = getUnquoteText(block, 'choose_item', Generator.ORDER_NONE);
        return [`ramdump_write(TEST_SUB, ${choose_item})`,Generator.ORDER_ATOMIC];
        ;
    };

    Generator.second_test_mode = function (block) {
        return [`ramdump_write(FLG_MAIN, 2)`]; 
        ;
    };

    Generator.second_key_push = function (block) {
        const key_push = Generator.getFieldValue(block, 'key_push') || null;
        return [`ramdump_write(DUMP_KEY, ${key_push})`]; 
        ;
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
        return [`ramdump_write(${time_type}, ${time_var})`];
    };

    Generator.second_measure_check = function (block) {
        const measure = Generator.getFieldValue(block, 'measure') || null;
        return [`ramdump_read(VALUE_${measure})`,Generator.ORDER_ATOMIC];
        ;
    };

    Generator.second_load_output_off = function (block) {
        return [`CA150_output_OFF()`];
        ;
    };
    
    Generator.second_resistance_output = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period = Generator.getFieldValue(block, 'num_period') || null;
        if (num_main == 0) {
            return [`CA150_output_registor(${num_period})`,Generator.ORDER_ATOMIC]; 
        }
        else {
            return [`CA150_output_registor(${num_main}${num_period})`,Generator.ORDER_ATOMIC]; 
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
                    return [`CA150_output_registor(${num_period_3}0)`,Generator.ORDER_ATOMIC];
                }
                else {
                    return [`CA150_output_registor(${num_period_2}${num_period_3}0)`,Generator.ORDER_ATOMIC];
                }  
            }
            else {
                return [`CA150_output_registor(${num_period_1}${num_period_2}${num_period_3}0)`,Generator.ORDER_ATOMIC];
            }
        }
        else {
            return [`CA150_output_registor(${num_main}${num_period_1}${num_period_2}${num_period_3}0)`,Generator.ORDER_ATOMIC];
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
                    return [`CA150_output_mV(${num_period_3})`,Generator.ORDER_ATOMIC];
                }
                else {
                    return [`CA150_output_mV(${num_period_2}${num_period_3})`,Generator.ORDER_ATOMIC];
                }
            }
            else {
                return [`CA150_output_mV(${num_period_1}${num_period_2}${num_period_3})`,Generator.ORDER_ATOMIC];
            }
        }
        else {
            return [`CA150_output_mV(${num_main}${num_period_1}${num_period_2}${num_period_3})`,Generator.ORDER_ATOMIC];
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
                    return [`CA150_output_V(${num_period_3})`,Generator.ORDER_ATOMIC]; 
                }
                else {
                    return [`CA150_output_V(${num_period_2}${num_period_3})`,Generator.ORDER_ATOMIC]; 
                }
            }
            else {
                return [`CA150_output_V(${num_period_1}${num_period_2}${num_period_3})`,Generator.ORDER_ATOMIC]; 
            }
        }
        else {
            return [`CA150_output_V(${num_main}${num_period_1}${num_period_2}${num_period_3})`,Generator.ORDER_ATOMIC]; 
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
                    return [`CA150_output_ampare(${num_period_3})`,Generator.ORDER_ATOMIC]; 
                }
                else {
                    return [`CA150_output_ampare(${num_period_2}${num_period_3})`,Generator.ORDER_ATOMIC]; 
                }
            }
            else {
                return [`CA150_output_ampare(${num_period_1}${num_period_2}${num_period_3})`,Generator.ORDER_ATOMIC]; 
            }
        }
        else {
            return [`CA150_output_ampare(${num_main}${num_period_1}${num_period_2}${num_period_3})`,Generator.ORDER_ATOMIC]; 
        }
    };

    Generator.second_pt_output = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period = Generator.getFieldValue(block, 'num_period') || null;
        if (num_main == 0) {
            return [`CA150_output_Pt100(${num_period})`,Generator.ORDER_ATOMIC];
        }
        else {
            return [`CA150_output_Pt100(${num_main}${num_period})`,Generator.ORDER_ATOMIC];
        } 
    };

    Generator.second_k_output = function (block) {
        const num_main = getUnquoteText(block, 'num_main', Generator.ORDER_NONE);
        const num_period = Generator.getFieldValue(block, 'num_period') || null;
        if (num_main == 0) {
            return [`CA150_output_Kterm(${num_period})`,Generator.ORDER_ATOMIC];
        }
        else {
            return [`CA150_output_Kterm(${num_main}${num_period})`,Generator.ORDER_ATOMIC];
        } 
    };

    Generator.second_connection_off = function (block) {
        return [`GPIB_OFF()`,Generator.ORDER_ATOMIC];
        ;
    };

    Generator.second_connection_change = function (block) {
        const channel = Generator.getFieldValue(block, 'channel') || null;
        return [`GPIB_output(CONNECT_CH${channel})`,Generator.ORDER_ATOMIC]; 
        ;
    };

    Generator.second_expression = function (block) {
        const order = Generator.ORDER_FUNCTION_CALL;
        const result = getUnquoteText(block, 'result', Generator.ORDER_NONE);
        const ok_ng = Generator.getFieldValue(block, 'ok_ng') || null;
        return [`${result} == ${ok_ng}`,order];
    };

    Generator.second_measure_num = function (block) {
        return [`value`,Generator.ORDER_ATOMIC];
    };

    Generator.second_test_process = function (block) {
        const process = getUnquoteText(block, 'process', Generator.ORDER_NONE);
        const result_var = getUnquoteText(block, 'result_var', Generator.ORDER_NONE);
        return `${result_var} = ${process}\n`;
    };
}