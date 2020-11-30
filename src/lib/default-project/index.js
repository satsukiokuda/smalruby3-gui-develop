import {TextEncoder} from 'text-encoding';
import projectData from './project-data2';

/* eslint-disable import/no-unresolved */
import pc from '!raw-loader!./f182965f3392170753811a1594f7242e.svg';
import board from '!raw-loader!./d98c03d5c296b86a3aaed84451191ae8.svg';
import wiring_replace from '!raw-loader!./0d41edd9df92582a87556b5989f4657c.svg';
import dummy_load from '!raw-loader!./c7dece3cb69276d14dc252b33f53f7ba.svg';
import serial1 from '!raw-loader!./9bd72ff8a6430f4d878f6b3d890a1298.svg';
import serial2 from '!raw-loader!./9bd72ff8a6430f4d878f6b3d890a1298.svg';
import serial3 from '!raw-loader!./9bd72ff8a6430f4d878f6b3d890a1298.svg';
import code_space from '!raw-loader!./352faf862b936ddf2d0dc746bbe96ae9.svg';
/* eslint-enable import/no-unresolved */


const encoder = new TextEncoder();
const defaultProject = translator => {
    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: 'f182965f3392170753811a1594f7242e',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(pc)
    }, {
        id: 'd98c03d5c296b86a3aaed84451191ae8',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(board)
    }, {
        id: '0d41edd9df92582a87556b5989f4657c',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(wiring_replace)
    }, {
        id: 'c7dece3cb69276d14dc252b33f53f7ba',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(dummy_load)
    },{
        id: '9bd72ff8a6430f4d878f6b3d890a1298',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(serial1)
    },{
        id: '9bd72ff8a6430f4d878f6b3d890a1298',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(serial2)
    },{
        id: '9bd72ff8a6430f4d878f6b3d890a1298',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(serial3)
    },{
        id: '352faf862b936ddf2d0dc746bbe96ae9',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(code_space)
    }];
};

export default defaultProject;
