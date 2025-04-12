import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];

// export const themeTypeOptions = [
// 	{ label: 'Alert', value: 'alert' },
// 	{ label: 'Error', value: 'error' },
// 	{ label: 'Informational (Basic-1)', value: 'basic' },
// 	{ label: 'Informational (Basic-2)', value: 'information2' },
// 	{ label: 'Informational (Basic-3)', value: 'information3' },
// 	{ label: 'Informational (Admin-1)', value: 'admin1' },
// 	{ label: 'Informational (Admin-2)', value: 'admin2' },
// 	{ label: 'Informational (Admin-3)', value: 'admin3' },
// 	{ label: 'Informational (Admin-4)', value: 'admin4' },
// 	{ label: 'Informational (Admin-5)', value: 'admin5' },
// 	{ label: 'File', value: 'file' },
// 	{ label: 'Tip', value: 'tip' },
// ]    

export const themeTypeOptions = [
    { label: 'Alert', value: 0 },
    { label: 'Error', value: 1 },
    { label: 'Information 1', value: 2 },
    { label: 'Information 2', value: 3 },
    { label: 'Information 3', value: 4 },
    { label: 'Admin Permission Required 1', value: 5 },
    { label: 'Admin Permission Required 2', value: 6 },
    { label: 'Admin Permission Required 3', value: 7 },
    { label: 'Admin Permission Required 4', value: 8 },
    { label: 'Admin Permission Required 5', value: 9 },
    { label: 'File', value: 10 },
    { label: 'Tip', value: 11 },
]