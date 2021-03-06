// ==UserScript==
// @name         I can't believe it's not 2
// @namespace    infinitytec.github.io
// @version      1.8.4
// @description  Making Scratch 3.0 look like Scratch 2.
// @author       infinitytec
// @match        https://llk.github.io/scratch-gui/*
// @match        https://beta.scratch.mit.edu/*
// @match        https://scratch.mit.edu/projects/editor/*
// @match        https://scratch.mit.edu/projects/*
// @match        https://scratch.org/projects/*
// @match        https://aero-a.github.io/scratch-gui/*
// @match        https://lab.scratch.mit.edu/*
// @grant        GM_addStyle
// @updateURL    https://github.com/infinitytec/I-Cant-Beleive-Its-Not-2/raw/master/not2.user.js
// ==/UserScript==

(function() {
   'use strict';
    //Reposition everything
    GM_addStyle(".menu-bar_menu-bar-button_3IDN0{height: 1.5rem;} .menu-bar_divider_2VFCm {height: 30px;} .menu-bar_scratch-logo_2uReV{height: 1.5rem !important;}");
    GM_addStyle("#app {overflow-y: hidden; min-width: 1240px; } rect.blocklyMainBackground {fill: #dddede !important;}");
    GM_addStyle(".gui_body-wrapper_-N0sA {height: calc(100% - 2rem);} .stage-header_stage-size-row_14N65 {position:absolute;}");
    GM_addStyle(".gui_flex-wrapper_uXHkj{} .stage_stage_1fD7k {border: none;}");
    GM_addStyle(".gui_editor-wrapper_2DYcj {position: absolute; width: calc(100% - 500px); right:0; height: 97%;}");
    GM_addStyle(".gui_stage-and-target-wrapper_69KBf {position: absolute; left: 0; height: 97%;}");
    GM_addStyle(".blocklyText {font-size: 10pt;} .sprite-selector_sprite-selector_2KgCX {width: 428px; } .menu_menu_3k7QT {background: #9c9ea2; top: 30px;}");
    GM_addStyle(".gui_stage-menu-wrapper_W5Ler {border-radius: 10px 10px 0px 0px;border: 1px solid #D0D1D2;margin-left: 0.5rem;margin-right: 0.5rem;margin-top: 5px;}");
    GM_addStyle(".stage-selector_header_2GVr1, .gui_stage-menu-wrapper_W5Ler, .sprite-info_sprite-info_3EyZh, .gui_tab_27Unf.gui_is-selected_sHAiu {border: 1px solid #D0D1D2;background: #fefefe; /* Old browsers */background: -moz-linear-gradient(top, #fefefe 0%, #e7e9e9 100%); /* FF3.6-15 */background: -webkit-linear-gradient(top, #fefefe 0%,#e7e9e9 100%); /* Chrome10-25,Safari5.1-6 */background: linear-gradient(to bottom, #fefefe 0%,#e7e9e9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefefe', endColorstr='#e7e9e9',GradientType=0 ); /* IE6-9 */}");
    GM_addStyle(".stage_stage-wrapper_eRRuk {border-radius: 0px; border: 1px solid #D0D1D2;} .backpack_backpack-container_2_wGr {margin-top: 10px;}");
    GM_addStyle(".target-pane_stage-selector-wrapper_qekSW {position: relative;right: 85%;}");
    GM_addStyle(".sprite-selector_sprite-selector_2KgCX {position: relative;left: 16.5%;}");
    GM_addStyle(".sprite-selector_scroll-wrapper_3NNnc, .stage-selector_stage-selector_3oWOr, .blocklyFlyoutBackground, .blocklyToolboxDiv, .scratchCategoryMenu{background: #E6E8E8; fill: #E6E8E8; background-color: #E6E8E8;}");
    GM_addStyle(".gui_tab_27Unf {background-color: #F2F2F2;border: 1px solid #D0D1D2;}.backpack_backpack-header_6ltCS{position:relative; top: -10px;}");
    GM_addStyle(".controls_controls-container_2xinB {position: relative; left: 87%;}");
    GM_addStyle(" .gui_tab_27Unf.gui_is-selected_sHAiu { color: #5C5D5F;} .stage-header_stage-menu-wrapper_15JJt box_box_2jjDp{background: -moz-linear-gradient(top, #fefefe 0%, #e7e9e9 100%); }");
    GM_addStyle(".menu-bar_menu-bar_JcuHF {height: 2rem; background-color: #9C9EA2;}");
    GM_addStyle(".menu-bar_menu-item_2lssx {padding: 0 .5rem;line-height: 2rem;}.selector_wrapper_8_BHs, .selector_wrapper_8_BHs {background: #e6e8e8;} span.button_outlined-button_1bS__:nth-child(2){position: absolute;}");
    GM_addStyle(".menu-bar_scratch-logo_2uReV {height: 2rem; padding: 0.3rem 0;}");
    GM_addStyle(".language-selector_language-select_8Vfnm {height: 1.5rem; background: rgba(255, 255, 255, 0.1); border: 1px solid #9C9EA2; color: white;}");
    GM_addStyle(".icon-button_container_278u5 {color: #9C9EA2;} .stage_stage_1fD7k{border-radius: 0;}");
    GM_addStyle(".icon-button_container_278u5 {filter: saturate(0%);} html body div.index_app_3Qs6X div.gui_page-wrapper_1cgy0.box_box_2jjDp div.gui_body-wrapper_-N0sA.box_box_2jjDp div.gui_flex-wrapper_uXHkj.box_box_2jjDp div.gui_stage-and-target-wrapper_69KBf.gui_large_yTJBa.box_box_2jjDp div.stage-wrapper_stage-wrapper_2bejr.box_box_2jjDp div.box_box_2jjDp div.stage-header_stage-header-wrapper_1F4gT.box_box_2jjDp div.stage-header_stage-menu-wrapper_15JJt.box_box_2jjDp div.stage-header_stage-size-row_14N65 {position: absolute; left: 0;}");
    GM_addStyle(".icon-button_container_278u5:hover {color: #007BE7 !important; -webkit-transform: scale(1.0);-ms-transform: scale(1.0);transform: scale(1.0);filter: saturate(100%);}");
    GM_addStyle(".monitor_monitor_11Vhm {background: #B6B6B6; border: 1.5px solid #9C9EA2;} .monitor_value_3Yexa { box-shadow: inset .5px .5px 2px #4d4d4d; border: 1px solid white;} .menu-bar_menu-bar-item_oLDa-{height: 2rem;}");
    GM_addStyle("div.menu-bar_menu-bar-item_oLDa-:nth-child(5){position: relative;top: 3rem;right: 14rem;}input.input_input-form_l9eYg:nth-child(1){border: 1px solid #D0D1D2;background: white;color: black;} .gui, .index_app_3Qs6X{overflow: hidden;} .stage-selector_costume-canvas_2L_6h {background: white;} .stage-selector_header-title_33xCt{color: hsla(225, 15%, 40%, 1);}.stage-wrapper_stage-wrapper_2bejr{border-radius: 5px 5px 0 0;background: linear-gradient(to bottom, #fefefe 0%,#e7e9e9 10%);border: 1px solid #D0D1D2;margin: 10px 0 0 auto;}.gui_body-wrapper_-N0sA {background: white;} .backpack_backpack-header_6ltCS{border-radius: 5px 5px 0 0;background: linear-gradient(to bottom, #fefefe 0%,#e7e9e9 100%)}");
    GM_addStyle(".stage-wrapper_stage-wrapper_2bejr.stage-wrapper_full-screen_2hjMb {margin-top: 0}");
    // Image editing tools moved to the right thanks to gliczide
    GM_addStyle(".paint-editor_top-align-row_25164 { direction: rtl !important; } .paint-editor_mode-selector_28iiQ { display: grid; }");
    GM_addStyle(".stage_stage_1fD7k.stage_full-screen_ZO7xi {border: none;}")
})();
