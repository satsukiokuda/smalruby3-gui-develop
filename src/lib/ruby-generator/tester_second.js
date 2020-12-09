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
        return `#テスト番号${choose_number}を選択する\n` +
        `ok = ramdump_write(TEST_NO, TEST_${choose_number})\n`
        ;
    };

    Generator.second_choose_item = function (block) {
        const choose_item = getUnquoteText(block, 'choose_item', Generator.ORDER_NONE);
        return `#テスト内項目${choose_item}を選択する\n` +
        `ok = ramdump_write(TEST_SUB, ${choose_item})\n`
        ;
    };

    Generator.second_test_mode = function (block) {
        return `#テストモードへ投入する\n` +
        `ok = ramdump_write(FLG_MAIN, 2)\n` 
        ;
    };

    Generator.second_key_push = function (block) {
        const key_push = Generator.getFieldValue(block, 'key_push') || null;
        return `#${key_push}キーを押す\n` +
        `ok = ramdump_write(DUMP_KEY, ${key_push})\n` 
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

    Generator.second_measure_check = function (block) {
        const measure = Generator.getFieldValue(block, 'measure') || null;
        return `#測定値を測る(ohm)\n` +
        `ok, value = ramdump_read(VALUE_${measure})\n`
        ;
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
        return `#接続をOFFにする\n` +
        `ok = GPIB_OFF()\n`
        ;
    };

    Generator.second_connection_change = function (block) {
        const channel = Generator.getFieldValue(block, 'channel') || null;
        return `#接続チャンネル ${channel}\n` +
        `ok = GPIB_output(CONNECT_CH${channel})\n` 
        ;
    };

    Generator.second_expression = function (block) {
        const order = Generator.ORDER_FUNCTION_CALL;
        const ok_ng = Generator.getFieldValue(block, 'ok_ng') || null;
        return [`ok == ${ok_ng}`,order];
    };

    Generator.second_measure_num = function (block) {
        return [`value`,Generator.ORDER_ATOMIC];
    };

    Generator.second_test_result = function (block) {
        return [`result`,Generator.ORDER_ATOMIC];
    };
}