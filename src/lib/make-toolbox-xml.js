import ScratchBlocks from 'scratch-blocks';

const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

const motion = function (isStage, targetId) {
    const stageSelected = ScratchBlocks.ScratchMsgs.translate(
        'MOTION_STAGE_SELECTED',
        'Stage selected: no motion blocks'
    );
    return `
    <category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">
        ${isStage ? `
        <label text="${stageSelected}"></label>
        ` : `
        <block type="motion_movesteps">
            <value name="STEPS">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_turnright">
            <value name="DEGREES">
                <shadow type="math_number">
                    <field name="NUM">15</field>
                </shadow>
            </value>
        </block>
        <block type="motion_turnleft">
            <value name="DEGREES">
                <shadow type="math_number">
                    <field name="NUM">15</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="motion_goto">
            <value name="TO">
                <shadow type="motion_goto_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_gotoxy">
            <value name="X">
                <shadow id="movex" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow id="movey" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="motion_glideto" id="motion_glideto">
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="motion_glideto_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_glidesecstoxy">
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="X">
                <shadow id="glidex" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow id="glidey" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="motion_pointindirection">
            <value name="DIRECTION">
                <shadow type="math_angle">
                    <field name="NUM">90</field>
                </shadow>
            </value>
        </block>
        <block type="motion_pointtowards">
            <value name="TOWARDS">
                <shadow type="motion_pointtowards_menu">
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="motion_changexby">
            <value name="DX">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_setx">
            <value name="X">
                <shadow id="setx" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="motion_changeyby">
            <value name="DY">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_sety">
            <value name="Y">
                <shadow id="sety" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="motion_ifonedgebounce"/>
        ${blockSeparator}
        <block type="motion_setrotationstyle"/>
        ${blockSeparator}
        <block id="${targetId}_xposition" type="motion_xposition"/>
        <block id="${targetId}_yposition" type="motion_yposition"/>
        <block id="${targetId}_direction" type="motion_direction"/>`}
        ${categorySeparator}
    </category>
    `;
};

const looks = function (isStage, targetId) {
    const hello = ScratchBlocks.ScratchMsgs.translate('LOOKS_HELLO', 'Hello!');
    const hmm = ScratchBlocks.ScratchMsgs.translate('LOOKS_HMM', 'Hmm...');
    return `
    <category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#9966FF" secondaryColour="#774DCB">
        ${isStage ? '' : `
        <block type="looks_sayforsecs">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">${hello}</field>
                </shadow>
            </value>
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="looks_say">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">${hello}</field>
                </shadow>
            </value>
        </block>
        <block type="looks_thinkforsecs">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">${hmm}</field>
                </shadow>
            </value>
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="looks_think">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">${hmm}</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        `}
        ${isStage ? `
            <block type="looks_switchbackdropto">
                <value name="BACKDROP">
                    <shadow type="looks_backdrops"/>
                </value>
            </block>
            <block type="looks_switchbackdroptoandwait">
                <value name="BACKDROP">
                    <shadow type="looks_backdrops"/>
                </value>
            </block>
            <block type="looks_nextbackdrop"/>
        ` : `
            <block id="${targetId}_switchcostumeto" type="looks_switchcostumeto">
                <value name="COSTUME">
                    <shadow type="looks_costume"/>
                </value>
            </block>
            <block type="looks_nextcostume"/>
            <block type="looks_switchbackdropto">
                <value name="BACKDROP">
                    <shadow type="looks_backdrops"/>
                </value>
            </block>
            <block type="looks_nextbackdrop"/>
            ${blockSeparator}
            <block type="looks_changesizeby">
                <value name="CHANGE">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="looks_setsizeto">
                <value name="SIZE">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
        `}
        ${blockSeparator}
        <block type="looks_changeeffectby">
            <value name="CHANGE">
                <shadow type="math_number">
                    <field name="NUM">25</field>
                </shadow>
            </value>
        </block>
        <block type="looks_seteffectto">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="looks_cleargraphiceffects"/>
        ${blockSeparator}
        ${isStage ? '' : `
            <block type="looks_show"/>
            <block type="looks_hide"/>
        ${blockSeparator}
            <block type="looks_gotofrontback"/>
            <block type="looks_goforwardbackwardlayers">
                <value name="NUM">
                    <shadow type="math_integer">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
        `}
        ${isStage ? `
            <block id="backdropnumbername" type="looks_backdropnumbername"/>
        ` : `
            <block id="${targetId}_costumenumbername" type="looks_costumenumbername"/>
            <block id="backdropnumbername" type="looks_backdropnumbername"/>
            <block id="${targetId}_size" type="looks_size"/>
        `}
        ${categorySeparator}
    </category>
    `;
};

const sound = function (isStage, targetId) {
    return `
    <category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#D65CD6" secondaryColour="#BD42BD">
        <block id="${targetId}_sound_playuntildone" type="sound_playuntildone">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu"/>
            </value>
        </block>
        <block id="${targetId}_sound_play" type="sound_play">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu"/>
            </value>
        </block>
        <block type="sound_stopallsounds"/>
        ${blockSeparator}
        <block type="sound_changeeffectby">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_seteffectto">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="sound_cleareffects"/>
        ${blockSeparator}
        <block type="sound_changevolumeby">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">-10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_setvolumeto">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block id="${targetId}_volume" type="sound_volume"/>
        ${categorySeparator}
    </category>
    `;
};

const events = function (isStage) {
    return `
    <category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">
        <block type="event_whenflagclicked"/>
        <block type="event_whenkeypressed">
        </block>
        ${isStage ? `
            <block type="event_whenstageclicked"/>
        ` : `
            <block type="event_whenthisspriteclicked"/>
        `}
        <block type="event_whenbackdropswitchesto">
        </block>
        ${blockSeparator}
        <block type="event_whengreaterthan">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="event_whenbroadcastreceived">
        </block>
        <block type="event_broadcast">
            <value name="BROADCAST_INPUT">
                <shadow type="event_broadcast_menu"></shadow>
            </value>
        </block>
        <block type="event_broadcastandwait">
            <value name="BROADCAST_INPUT">
              <shadow type="event_broadcast_menu"></shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};

const control = function (isStage) {
    return `
    <category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">
        <block type="control_wait">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block id="forever" type="control_forever"/>
        ${blockSeparator}
        <block type="control_if"/>
        <block type="control_if_else"/>
        <block id="wait_until" type="control_wait_until"/>
        <block id="repeat_until" type="control_repeat_until"/>
        ${blockSeparator}
        <block type="control_stop"/>
        ${blockSeparator}
        ${isStage ? `
            <block type="control_create_clone_of">
                <value name="CLONE_OPTION">
                    <shadow type="control_create_clone_of_menu"/>
                </value>
            </block>
        ` : `
            <block type="control_start_as_clone"/>
            <block type="control_create_clone_of">
                <value name="CLONE_OPTION">
                    <shadow type="control_create_clone_of_menu"/>
                </value>
            </block>
            <block type="control_delete_this_clone"/>
        `}
        ${categorySeparator}
    </category>
    `;
};

const sensing = function (isStage) {
    const name = ScratchBlocks.ScratchMsgs.translate('SENSING_ASK_TEXT', 'What\'s your name?');
    return `
    <category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">
        ${isStage ? '' : `
            <block type="sensing_touchingobject">
                <value name="TOUCHINGOBJECTMENU">
                    <shadow type="sensing_touchingobjectmenu"/>
                </value>
            </block>
            <block type="sensing_touchingcolor">
                <value name="COLOR">
                    <shadow type="colour_picker"/>
                </value>
            </block>
            <block type="sensing_coloristouchingcolor">
                <value name="COLOR">
                    <shadow type="colour_picker"/>
                </value>
                <value name="COLOR2">
                    <shadow type="colour_picker"/>
                </value>
            </block>
            <block type="sensing_distanceto">
                <value name="DISTANCETOMENU">
                    <shadow type="sensing_distancetomenu"/>
                </value>
            </block>
            ${blockSeparator}
        `}
        <block id="askandwait" type="sensing_askandwait">
            <value name="QUESTION">
                <shadow type="text">
                    <field name="TEXT">${name}</field>
                </shadow>
            </value>
        </block>
        <block id="answer" type="sensing_answer"/>
        ${blockSeparator}
        <block type="sensing_keypressed">
            <value name="KEY_OPTION">
                <shadow type="sensing_keyoptions"/>
            </value>
        </block>
        <block type="sensing_mousedown"/>
        <block type="sensing_mousex"/>
        <block type="sensing_mousey"/>
        ${isStage ? '' : `
            ${blockSeparator}
            '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>'+
            ${blockSeparator}
        `}
        ${blockSeparator}
        <block id="loudness" type="sensing_loudness"/>
        ${blockSeparator}
        <block id="timer" type="sensing_timer"/>
        <block type="sensing_resettimer"/>
        ${blockSeparator}
        <block id="of" type="sensing_of">
            <value name="OBJECT">
                <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
            </value>
        </block>
        ${blockSeparator}
        <block id="current" type="sensing_current"/>
        <block type="sensing_dayssince2000"/>
        ${blockSeparator}
        <block type="sensing_username"/>
        ${categorySeparator}
    </category>
    `;
};

const operators = function () {
    const apple = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_APPLE', 'apple');
    const banana = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_BANANA', 'banana');
    const letter = ScratchBlocks.ScratchMsgs.translate('OPERATORS_LETTEROF_APPLE', 'a');
    return `
    <category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438">
        <block type="operator_add">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_subtract">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_multiply">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_divide">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_random">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_gt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_lt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_equals">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_and"/>
        <block type="operator_or"/>
        <block type="operator_not"/>
        ${blockSeparator}
        <block type="operator_join">
            <value name="STRING1">
                <shadow type="text">
                    <field name="TEXT">${apple} </field>
                </shadow>
            </value>
            <value name="STRING2">
                <shadow type="text">
                    <field name="TEXT">${banana}</field>
                </shadow>
            </value>
        </block>
        <block type="operator_letter_of">
            <value name="LETTER">
                <shadow type="math_whole_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">${apple}</field>
                </shadow>
            </value>
        </block>
        <block type="operator_length">
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">${apple}</field>
                </shadow>
            </value>
        </block>
        <block type="operator_contains" id="operator_contains">
          <value name="STRING1">
            <shadow type="text">
              <field name="TEXT">${apple}</field>
            </shadow>
          </value>
          <value name="STRING2">
            <shadow type="text">
              <field name="TEXT">${letter}</field>
            </shadow>
          </value>
        </block>
        ${blockSeparator}
        <block type="operator_mod">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_round">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_mathop">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};

const variables = function () {
    return `
    <category
        name="%{BKY_CATEGORY_VARIABLES}"
        id="variables"
        colour="#FF8C1A"
        secondaryColour="#DB6E00"
        custom="VARIABLE">
    </category>
    `;
};

const myBlocks = function () {
    return `
    <category
        name="%{BKY_CATEGORY_MYBLOCKS}"
        id="myBlocks"
        colour="#FF6680"
        secondaryColour="#FF4D6A"
        custom="PROCEDURE">
    </category>
    `;
};

ScratchBlocks.Msg.CATEGORY_RUBY = 'Ruby';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_RUBY = 'Ruby';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_RUBY = 'ルビー';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_RUBY = 'ルビー';

const ruby = function () {
    return `
    <category
        name="%{BKY_CATEGORY_RUBY}"
        id="ruby"
        colour="#CC0043"
        secondaryColour="#FF4D6A">
        <block type="mrubyc_wifi_enterprise">
            <value name="SSID">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="USERNAME">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="PASSWORD">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_wifi_personal">
            <value name="SSID">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="PASSWORD">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
	    <block type="mrubyc_gpio_init_output">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_init_input">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_i2c_lcd_init">
        </block>
        <block type="mrubyc_init_adc">
        </block>
        <block type="mrubyc_sht_init">
            <value name="SHT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="mrubyc_gpio_set_level">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="STATE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_sound">
            <value name="SOUND">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="TIME">
                <shadow type="math_number">
                    <field name="NUM">1000</field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_sw_state">
            <value name="SW">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_read_adc">
        </block>
        <block type="mrubyc_sht_get_temp">
        </block>
        <block type="mrubyc_sht_get_humi">
            <value name="TEMP">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_i2c_rtc_get_time">
        </block>
        <block type="mrubyc_i2c_lcd_write">
            <value name="LINE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_i2c_lcd_write_var">
            <value name="LINE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="VAR">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_i2c_lcd_clean">
        </block>
        <block type="mrubyc_ambient_send_to">
            <value name="ID">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="RKEY">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="WKEY">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_ambient_add_data">
            <value name="D1">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="DATA1">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="D2">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="DATA2">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_ambient_data_send">
        </block>
        <block type="mrubyc_while">
            <value name="CONDITION">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_puts">
            <value name="OUTPUT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_puts_var">
            <value name="OUTPUT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="ruby_statement">
            <value name="STATEMENT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="ruby_statement_with_block">
            <value name="STATEMENT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="ARGS">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="ruby_expression">
            <value name="EXPRESSION">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="ruby_range">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="ruby_exclude_range">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
    </category>
    `;
};

ScratchBlocks.Msg.CATEGORY_TESTER = 'tester';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_TESTER = 'tester';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_TESTER = 'テスター';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_TESTER = 'テスター';

const tester = function () {
    return `
    <category
        name="%{BKY_CATEGORY_TESTER}"
        id="tester"
        colour="#1E90FF"
        secondaryColour="#0000FF">
        <block type="init_figure_number">
            <value name="figure_number">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="test_finish">
        </block>
        ${blockSeparator}
        <block type="measure_range_check">
            <value name="figure_number">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="range_first">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="range_last">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="choose_number">
            <value name="choose_number">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="choose_item">
            <value name="choose_item">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="set_clock">
        </block>
        <block type="test_mode">
        </block>
        <block type="key_push">
            <value name="key_push">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="test_result">
            <value name="test_result">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="load_output_off">
        </block>
        <block type="resistance_output">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">100</field>
                </shadow>
            </value>
            <value name="num_period">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="resistance_output_k">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">1</field>
                </shadow>
            </value>
            <value name="num_period_1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="voltage_output_m">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">100</field>
                </shadow>
            </value>
            <value name="num_period_1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="voltage_output">
            <value name="num_main">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="current_output_m">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">4</field>
                </shadow>
            </value>
            <value name="num_period_1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="pt_output">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">0</field>
                </shadow>
            </value>
            <value name="num_period">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="k_output">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">0</field>
                </shadow>
            </value>
            <value name="num_period">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="connection_off">
        </block>
        <block type="connection_change">
            <value name="channel">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="tester_test_result">
            <value name="TEST_RESULT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        </category>
        `;
};

ScratchBlocks.Msg.CATEGORY_TESTERSECOND = 'tester_second';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_TESTERSECOND = 'tester_second';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_TESTERSECOND = 'テスター2';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_TESTERSECOND = 'テスター2';

const testersecond = function () {
    return `
    <category
        name="%{BKY_CATEGORY_TESTERSECOND}"
        id="tester_second"
        colour="#008DB7"
        secondaryColour="#007199">
        <block type="second_choose_number">
            <value name="choose_number">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="second_choose_item">
            <value name="choose_item">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="second_test_exit">
        </block>
        ${blockSeparator}
        <block type="second_load_output_off">
        </block>
        <block type="second_resistance_output">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">100</field>
                </shadow>
            </value>
            <value name="num_period">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="second_resistance_output_k">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">1</field>
                </shadow>
            </value>
            <value name="num_period_1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="second_voltage_output_m">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">100</field>
                </shadow>
            </value>
            <value name="num_period_1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="second_voltage_output">
            <value name="num_main">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="second_current_output_m">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">4</field>
                </shadow>
            </value>
            <value name="num_period_1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="num_period_3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="second_pt_output">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">0</field>
                </shadow>
            </value>
            <value name="num_period">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="second_k_output">
            <value name="num_main">
                <shadow type="text">
                    <field name="TEXT">0</field>
                </shadow>
            </value>
            <value name="num_period">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="second_expression">
            <value name="ok_ng">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
    </category>
    `;
};

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isStage - Whether the toolbox is for a stage-type target.
 * @param {?string} targetId - The current editing target
 * @param {string?} categoriesXML - null for default toolbox, or an XML string with <category> elements.
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (isStage, targetId, categoriesXML) {
    const gap = [categorySeparator];

    const everything = [
        xmlOpen,
        motion(isStage, targetId), gap,
        looks(isStage, targetId), gap,
        sound(isStage, targetId), gap,
        events(isStage, targetId), gap,
        control(isStage, targetId), gap,
        sensing(isStage, targetId), gap,
        operators(isStage, targetId), gap,
        variables(isStage, targetId), gap,
        myBlocks(isStage, targetId), gap,
        ruby(isStage, targetId), gap,
        tester(isStage, targetId), gap,
        testersecond(isStage, targetId)
    ];

    if (categoriesXML) {
        everything.push(gap, categoriesXML);
    }

    everything.push(xmlClose);
    return everything.join('\n');
};

export default makeToolboxXML;
