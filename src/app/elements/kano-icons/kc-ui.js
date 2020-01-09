/*
 * Copyright (C) 2016-2020 Kano Computing Ltd.
 * License: http://www.gnu.org/licenses/gpl-2.0.txt GNU General Public License v2
 */

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<iron-iconset-svg name="kc-ui" size="64">
<svg>
	<defs>
		<g id="handle">
		    <path d="M44.1,35.12h-24a2.92,2.92,0,1,1,0-5.83h24a2.92,2.92,0,1,1,0,5.83Z"></path><path d="M44.1,23.46h-24a2.92,2.92,0,1,1,0-5.83h24a2.92,2.92,0,1,1,0,5.83Z"></path><path d="M44.1,46.77h-24a2.92,2.92,0,1,1,0-5.83h24a2.92,2.92,0,1,1,0,5.83Z"></path>
		</g>

		<g id="close">
		    <path d="M30.46,39.05,24.9,44.61a2,2,0,0,1-1.5.62,2.14,2.14,0,0,1-1.53-.62l-2.46-2.46a2.14,2.14,0,0,1-.62-1.53,2,2,0,0,1,.62-1.5L25,33.56a2.18,2.18,0,0,0,0-3.06L19.41,25a2,2,0,0,1-.62-1.5,2.14,2.14,0,0,1,.62-1.53l2.46-2.46a2.14,2.14,0,0,1,1.53-.62,2,2,0,0,1,1.5.62L30.46,25a2.18,2.18,0,0,0,3.06,0l5.55-5.55a2,2,0,0,1,1.5-.62,2.14,2.14,0,0,1,1.53.62l2.46,2.46a2.14,2.14,0,0,1,.62,1.53,2,2,0,0,1-.62,1.5L39,30.51a2.18,2.18,0,0,0,0,3.06l5.55,5.55a2,2,0,0,1,.56,2.06,2.09,2.09,0,0,1-.56,1l-2.46,2.46a2.14,2.14,0,0,1-1.53.62,2,2,0,0,1-1.5-.62l-5.55-5.55a2.18,2.18,0,0,0-3.06,0Z"></path>
		</g>

		<g id="settings">
			<path d="M50.64,30.46V33.3a1.59,1.59,0,0,1-.82,1.45A1.48,1.48,0,0,1,49,35h-.46a2.32,2.32,0,0,0-2.36,1.76c-.19.54-.42,1.09-.67,1.64a2.36,2.36,0,0,0,.41,2.94,2.28,2.28,0,0,1,.82,1.49A1.7,1.7,0,0,1,46.22,44l-2,2a1.66,1.66,0,0,1-1.18.48A1.65,1.65,0,0,1,41.86,46l-.36-.36a2.28,2.28,0,0,0-3-.43,14,14,0,0,1-1.59.67,2.55,2.55,0,0,0-1.3.92,2.4,2.4,0,0,0-.48,1.47v.48a1.6,1.6,0,0,1-.48,1.18,1.64,1.64,0,0,1-1.19.48H30.69A1.64,1.64,0,0,1,29,48.76v-.55a2.39,2.39,0,0,0-1.86-2.42c-.45-.16-.94-.37-1.47-.62a2.35,2.35,0,0,0-3,.43l-.38.41a1.61,1.61,0,0,1-1.18.48A1.64,1.64,0,0,1,20,46l-2-2a1.69,1.69,0,0,1-.48-1.19A1.56,1.56,0,0,1,18,41.65l.44-.44a2.34,2.34,0,0,0,.41-2.92,8.49,8.49,0,0,1-.63-1.56,2.74,2.74,0,0,0-.94-1.31A2.25,2.25,0,0,0,15.81,35h-.58a1.73,1.73,0,0,1-1.18-.51,1.65,1.65,0,0,1-.5-1.16V30.46a1.65,1.65,0,0,1,.5-1.16,1.73,1.73,0,0,1,1.18-.51h.58a2.21,2.21,0,0,0,1.45-.46A2.67,2.67,0,0,0,18.2,27c.19-.54.4-1.07.63-1.57a2.33,2.33,0,0,0-.41-2.91L18,22.11A1.59,1.59,0,0,1,17.5,21,1.66,1.66,0,0,1,18,19.77l2-2a1.64,1.64,0,0,1,1.19-.48,1.61,1.61,0,0,1,1.18.48l.38.39a2.34,2.34,0,0,0,2.95.43,12.41,12.41,0,0,1,1.59-.67,2.81,2.81,0,0,0,1.3-.92A2.25,2.25,0,0,0,29,15.55V15a1.66,1.66,0,0,1,1.66-1.67h2.82A1.66,1.66,0,0,1,35.18,15v.5A2.36,2.36,0,0,0,37,17.87a14,14,0,0,1,1.59.67,2.32,2.32,0,0,0,3-.43l.36-.34A1.65,1.65,0,0,1,43,17.29a1.66,1.66,0,0,1,1.18.48l2,2A1.67,1.67,0,0,1,46.71,21a1.6,1.6,0,0,1-.49,1.16,2.66,2.66,0,0,0-.79,3.21A15.77,15.77,0,0,1,46.15,27a2.35,2.35,0,0,0,2.36,1.76H49a1.55,1.55,0,0,1,1.45.85A1.68,1.68,0,0,1,50.64,30.46ZM34.09,41.31A9.81,9.81,0,0,0,39,38.66a8.58,8.58,0,0,0,2.44-4.13,11.59,11.59,0,0,0,.29-3.83,8.73,8.73,0,0,0-.92-3.07,9.68,9.68,0,0,0-4.63-4.46,9,9,0,0,0-5.91-.72,9.85,9.85,0,0,0-4.84,2.65,8.51,8.51,0,0,0-2.46,4.13,11,11,0,0,0-.27,3.83,9.27,9.27,0,0,0,.92,3.06,9.36,9.36,0,0,0,4.58,4.46A8.93,8.93,0,0,0,34.09,41.31Z"></path>
		</g>

		<g id="save">
			<path d="M42.24,27.52V16.63a1.32,1.32,0,0,1,.43-1,1.44,1.44,0,0,1,1-.4H46.6a2.07,2.07,0,0,1,2.12,2.12V46.41a2.08,2.08,0,0,1-2.12,2.12H17.53a2.07,2.07,0,0,1-2.12-2.12V22.25a2,2,0,0,1,.6-1.49l5.07-5.06a1.68,1.68,0,0,1,1.21-.48h.81a1.36,1.36,0,0,1,1,.4,1.38,1.38,0,0,1,.41,1V27.52a1.35,1.35,0,0,0,.43,1A1.37,1.37,0,0,0,26,29H40.82a1.33,1.33,0,0,0,1-.43A1.4,1.4,0,0,0,42.24,27.52ZM28.92,25.6a1.38,1.38,0,0,1-1.41-1.42V16.63a1.37,1.37,0,0,1,1.41-1.41h2.84a1.36,1.36,0,0,1,1,.4,1.38,1.38,0,0,1,.41,1v7.55a1.38,1.38,0,0,1-.41,1,1.36,1.36,0,0,1-1,.41Z"></path>
		</g>

		<g id="paint-draw">
		    <rect x="35.2" y="9.61" width="6.85" height="32.06" rx="2.33" ry="2.33" transform="translate(29.45 -19.8) rotate(45)"></rect><rect x="24.84" y="30.2" width="9.33" height="9.33" rx="2.33" ry="2.33" transform="translate(33.3 -10.65) rotate(45)"></rect><path d="M22.69,37.82A5,5,0,0,1,24.88,39a5.33,5.33,0,0,1,1.66,4.42q-.2,2.69-3.17,5a11.82,11.82,0,0,1-3.48,1.86A13.83,13.83,0,0,1,16,51a8.09,8.09,0,0,1-3.41-.44,3.72,3.72,0,0,1-2.14-1.77.53.53,0,0,1,.22-.74,1.21,1.21,0,0,0,.42-.22l.63-.42a4,4,0,0,0,.61-.44l.66-.57a7.57,7.57,0,0,0,2.28-3.74,6.51,6.51,0,0,1,2.84-3.83A5.76,5.76,0,0,1,22.69,37.82Z"></path>
		</g>

		<g id="paint-fill">
		    <path d="M30,51.13a5.18,5.18,0,0,1-3.69-1.53L14.74,38a5.12,5.12,0,0,1-1.53-3.69,5.19,5.19,0,0,1,1.53-3.69L27.87,17.49,24.36,14a1.53,1.53,0,0,1,2.16-2.16L46.31,31.6a3.83,3.83,0,0,1,0,5.41L33.72,49.6A5.19,5.19,0,0,1,30,51.13Zm0-31.48L16.9,32.78a2.12,2.12,0,0,0-.63,1.53,2,2,0,0,0,.63,1.53l11.6,11.6a2.21,2.21,0,0,0,3.06,0L44.14,34.86a.77.77,0,0,0,0-1.09ZM43,48.58c0-2.95,3.28-5.25,3.82-8.16.55,2.91,3.82,5.23,3.82,8.16a3.83,3.83,0,1,1-7.65,0Zm2.24-12.69L32.64,48.52a3.69,3.69,0,0,1-5.22,0l-11.6-11.6a6.49,6.49,0,0,1-1.08-2.61H44.62A.93.93,0,0,1,45.27,35.89Z"></path>
		</g>

		<g id="paint-erase">
		    <path d="M38.3,41.78,48.08,32a4.42,4.42,0,0,0,0-6.25L37.85,15.51a4.43,4.43,0,0,0-6.25,0l-9.78,9.78Z"></path><path d="M36.3,43.78,19.82,27.29l-4.48,4.48a4.43,4.43,0,0,0,0,6.25L25.57,48.26a4.4,4.4,0,0,0,3.12,1.29H49.37V46.73h-16Z"></path>
		</g>

		<g id="tick">
		    <path d="M52.94,18.71,50.73,16.5a2.2,2.2,0,0,0-1-.59,2.1,2.1,0,0,0-2.19.59L25.63,38.37,16.4,29.15a2.11,2.11,0,0,0-1.6-.67,2.22,2.22,0,0,0-1.63.67L11,31.36a2.33,2.33,0,0,0,0,3.23L24,47.65l0,0a2.22,2.22,0,0,0,1.61.65,2.1,2.1,0,0,0,1.54-.62L52.94,21.94a2,2,0,0,0,.61-1A2.12,2.12,0,0,0,52.94,18.71Z"></path>
		</g>

		<g id="restart">
		    <path d="M19.59,18h3.92a2.61,2.61,0,0,1,1.84.78,2.5,2.5,0,0,1,.75,1.84V43.38a2.5,2.5,0,0,1-.75,1.84,2.61,2.61,0,0,1-1.84.78H19.59a2.54,2.54,0,0,1-2.27-1.31A2.21,2.21,0,0,1,17,43.38V20.65A2.66,2.66,0,0,1,19.59,18ZM47,19.56v24.9a1.33,1.33,0,0,1-2,1.15L30.42,33.79a2.29,2.29,0,0,1,0-3.55L45,18.41a1.33,1.33,0,0,1,2,1.15Z"></path>
		</g>

		<g id="add">
		    <path d="M25.94,35.92H18.09a2,2,0,0,1-1.5-.62,2.14,2.14,0,0,1-.64-1.52V30.29a2.14,2.14,0,0,1,.64-1.52,2,2,0,0,1,1.5-.62h7.85A2.18,2.18,0,0,0,28.1,26V18.14a2,2,0,0,1,.62-1.5A2.14,2.14,0,0,1,30.24,16h3.48a2.14,2.14,0,0,1,1.52.64,2,2,0,0,1,.62,1.5V26A2.18,2.18,0,0,0,38,28.15h7.85a2,2,0,0,1,1.5.62A2.14,2.14,0,0,1,48,30.29v3.48a2.14,2.14,0,0,1-.64,1.52,2,2,0,0,1-1.5.62H38a2.18,2.18,0,0,0-2.16,2.16v7.85a2,2,0,0,1-1.06,1.85,2.09,2.09,0,0,1-1.08.29H30.24a2.14,2.14,0,0,1-1.52-.64,2,2,0,0,1-.62-1.5V38.08a2.18,2.18,0,0,0-2.16-2.16Z"></path>
		</g>

		<g id="duplicate">
		    <rect x="16" y="16.1" width="22" height="22" rx="2.64" ry="2.64"></rect><path d="M42.52,28.48V39.64a2.64,2.64,0,0,1-2.64,2.64H28.72a2.64,2.64,0,0,0-2.64,2.64v.29a2.64,2.64,0,0,0,2.64,2.64H45.45a2.64,2.64,0,0,0,2.64-2.64V28.48a2.64,2.64,0,0,0-2.64-2.64h-.29A2.64,2.64,0,0,0,42.52,28.48Z"></path>
		</g>

		<g id="reset" transform="translate(15.000000, 12.000000)">
            <path d="M17.3909022,3.68732612 C17.3909022,4.08066013 17.5293422,4.41468309 17.8062221,4.69251509 C18.0841569,4.9703471 18.4193245,5.1316353 18.8117513,5.17741886 C21.7700248,5.38553241 24.4742851,6.29811248 26.9235565,7.91515641 C29.3738564,9.5321977 31.2922347,11.6351872 32.6787441,14.2230805 C34.0881202,16.8099346 34.7928214,19.5944975 34.7928214,22.5746856 C34.7928214,27.9107211 32.7016372,32.3705972 28.5182137,35.9511938 C26.0450207,38.0541833 22.9722553,39.3590555 19.2978604,39.8668524 C17.5408151,40.0978591 15.7379573,40.0281406 13.8892869,39.6587388 C10.4928005,39.0125469 7.54599987,37.4412865 5.04991374,34.9460048 C2.55380123,32.4507204 1.01637675,29.7369178 0.4386689,26.8025159 C-0.60119995,21.4654385 0.207601586,16.8099346 2.86607574,12.836004 C3.32823675,12.1898121 3.95175716,11.7964754 4.73763923,11.6580803 C5.52352129,11.5196852 6.22822253,11.6934591 6.85171658,12.1773237 C7.4991587,12.5019811 7.90406058,13.0794964 8.06542,13.9109114 C8.22675304,14.7423265 8.08831309,15.4821692 7.65010017,16.1283638 C6.33229645,18.0461302 5.67340778,20.0440224 5.67340778,22.1241188 C5.67340778,24.2031734 6.06686312,26.0397775 6.85171658,27.6339283 C7.61470554,29.2280791 8.64312784,30.5568863 9.93801209,31.6193054 C11.2318677,32.6817271 12.7567907,33.4215698 14.5138359,33.8367577 C16.2698526,34.2998102 18.1528626,34.3227033 20.1638946,33.9064762 C22.1749267,33.4902491 23.9881761,32.4746527 25.6068077,30.8576114 C27.2243844,29.2395257 28.2871464,27.3103127 28.7961486,25.0689281 C29.2583096,22.875408 29.1198696,20.7370397 28.3797738,18.6579851 C27.6397043,16.5789279 26.438476,14.8692751 24.7751131,13.5290213 C23.1336147,12.1898121 21.2620512,11.358397 19.1583654,11.0347788 C18.6962044,10.965063 18.279856,11.080565 17.9113773,11.3812901 C17.5408151,11.6809734 17.3680091,12.0628609 17.3909022,12.5238324 L17.3909022,15.1585536 C17.3909022,15.5050623 17.2399871,15.7475155 16.9401878,15.8859106 C16.6393862,16.0243057 16.3625063,16.0024544 16.1085195,15.8161921 L7.33782566,9.16279595 C6.94434395,8.88600574 6.74867126,8.49267172 6.74867126,7.98487222 C6.74867126,7.47707536 6.94434395,7.0722948 7.33782566,6.77156969 L16.1085195,0.186852798 C16.3625063,-0.0202189634 16.6393862,-0.0556004041 16.9401878,0.0827973388 C17.2399871,0.222231601 17.3909022,0.464684803 17.3909022,0.811193463 L17.3909022,3.68732612 Z" id="Fill-31-Copy"></path>
		</g>

		<g id="arrow">
			<path d="M21.69,33.43H15.76a1.94,1.94,0,0,1-1.49-3.18L29.83,11.6a2.64,2.64,0,0,1,4,0L49.41,30.25a1.94,1.94,0,0,1-1.49,3.18h-6a2.59,2.59,0,0,0-2.63,2.63V50.38a2.79,2.79,0,0,1-2.83,2.83H27.12a2.7,2.7,0,0,1-2-.82,2.74,2.74,0,0,1-.82-2V36.06a2.59,2.59,0,0,0-2.63-2.63Z"></path>
		</g>

		<g id="minimize">
			<path d="M10.41,25.21V21A1.57,1.57,0,0,1,12,19.43h5.85a1.57,1.57,0,0,0,1.57-1.57V12A1.56,1.56,0,0,1,21,10.44h4.22A1.56,1.56,0,0,1,26.75,12V25.21a1.56,1.56,0,0,1-1.56,1.57H12A1.57,1.57,0,0,1,10.41,25.21Z"></path><path d="M37.18,52.3V39.09a1.56,1.56,0,0,1,1.57-1.56H52a1.56,1.56,0,0,1,1.57,1.56v4.22A1.57,1.57,0,0,1,52,44.88H46.1a1.56,1.56,0,0,0-1.56,1.56V52.3A1.57,1.57,0,0,1,43,53.87H38.75A1.57,1.57,0,0,1,37.18,52.3Z"></path>
		</g>
		<g id="maximize">
			<path d="M49.31,29.21H45.09a1.57,1.57,0,0,1-1.57-1.57V21.78A1.56,1.56,0,0,0,42,20.22H36.1a1.57,1.57,0,0,1-1.57-1.57V14.43a1.56,1.56,0,0,1,1.57-1.56H49.31a1.56,1.56,0,0,1,1.56,1.56V27.64A1.56,1.56,0,0,1,49.31,29.21Z"></path><path d="M27.32,50.88H14.11a1.57,1.57,0,0,1-1.57-1.57V36.1a1.57,1.57,0,0,1,1.57-1.57h4.22A1.57,1.57,0,0,1,19.9,36.1V42a1.56,1.56,0,0,0,1.56,1.56h5.86a1.57,1.57,0,0,1,1.57,1.57v4.22A1.57,1.57,0,0,1,27.32,50.88Z"></path>
		</g>

		<g id="import">
            <path d="M40.1739717,51.4769639 C39.8741217,51.2001446 39.7006079,50.8119012 39.6940003,50.4030102 C39.6812128,50.059335 39.7547938,49.7179563 39.9079634,49.4103288 C40.1949839,48.8583874 40.7745361,48.5233467 41.3941401,48.5511659 L47.3561952,48.5511659 C47.6839353,48.5523807 47.9976963,48.4179915 48.2236135,48.179636 C48.4658507,47.9484805 48.6019233,47.6269478 48.5994947,47.2914473 L48.5994947,22.4511902 C48.6019233,22.1156897 48.4658507,21.794157 48.2236135,21.5630015 C47.9982907,21.3230807 47.6846593,21.1866481 47.3561952,21.1856665 L16.666936,21.1856665 C16.3216648,21.1784383 15.9888201,21.3150332 15.7474726,21.5630015 C15.505755,21.7923713 15.378543,22.1180166 15.4005053,22.4511902 L15.4005053,47.2972525 C15.3777167,47.6305542 15.5050622,47.9565413 15.7474726,48.1854411 C15.9876324,48.4309689 16.3184802,48.5655015 16.6611532,48.556971 L22.6521222,48.556971 C23.0919733,48.5567755 23.5116587,48.7421513 23.8086799,49.0678246 C24.1199426,49.4057697 24.3004543,49.8443801 24.3175653,50.3043226 C24.2934242,51.2280387 23.5548428,51.9720246 22.6347738,51.9994278 L14.5157386,51.9994278 C13.8458505,52.0143467 13.2024338,51.7369251 12.7519881,51.2389525 C12.2660012,50.7704743 11.9940252,50.1215078 12.0002255,49.4451597 L12.0002255,14.527154 C11.9910302,13.8485231 12.2633581,13.196614 12.7519881,12.727556 C13.2113823,12.2393305 13.8588444,11.9746863 14.5273042,12.0019117 L49.4726958,12.0019117 C50.1404892,11.9784818 50.7864535,12.2425138 51.2480119,12.727556 C51.7366419,13.196614 52.0089698,13.8485231 51.9997745,14.527154 L51.9997745,49.4451597 C52.0075753,50.1235181 51.7354708,50.7748921 51.2480119,51.2447577 C50.7899638,51.7314253 50.1449509,51.9959301 49.4784786,51.970402 L41.3825745,51.970402 C40.931095,51.9700623 40.497532,51.7930509 40.1739717,51.4769639 Z M32.0780676,51.9878175 C31.5005334,52.0052166 30.9387785,51.7971253 30.5109319,51.407302 C30.0994314,51.0389211 29.8673622,50.5094512 29.8748252,49.9560133 L29.8748252,42.2699885 C29.8748252,41.6287688 29.3570166,41.1089575 28.7182675,41.1089575 L25.693869,41.1089575 C25.224,41.1117006 24.799179,40.8287964 24.6189979,40.3931605 C24.4388167,39.9575246 24.5390924,39.4557545 24.872713,39.1235946 L30.7422435,33.3184399 C31.498558,32.6357894 32.6460117,32.6357894 33.4023262,33.3184399 L39.2487255,39.1235946 C39.5823461,39.4557545 39.6826219,39.9575246 39.5024407,40.3931605 C39.3222595,40.8287964 38.8974386,41.1117006 38.4275696,41.1089575 L35.4552162,41.1089575 C35.1514591,41.1032936 34.8602382,41.2304011 34.6571914,41.4572668 C34.4471598,41.6857462 34.3260522,41.982474 34.3160068,42.2932091 L34.3160068,49.9269876 C34.3166063,50.478166 34.0702955,51.0004034 33.6452034,51.3492505 C33.216507,51.7417022 32.6582409,51.9609092 32.0780676,51.9645969 L32.0780676,51.9878175 Z M37.9372806,18.2475037 C38.3551284,18.2725746 38.7618532,18.1077721 39.0431215,17.7994235 C39.343562,17.4983033 39.5082571,17.0888021 39.4995002,16.6646748 C39.5057215,16.254687 39.3404249,15.8605517 39.0431215,15.57648 C38.4301237,14.9745067 37.4444375,14.9745067 36.8314397,15.57648 C36.5335387,15.8601444 36.3681282,16.2545512 36.3750609,16.6646748 C36.3726111,17.080767 36.5368298,17.4807078 36.8314397,17.7761466 C37.1136965,18.0830868 37.5197153,18.2476032 37.9372806,18.2242268 L37.9372806,18.2475037 Z M42.2989889,18.25 C42.6530803,18.2234339 42.9941408,18.1049669 43.2885456,17.9062786 C43.6828133,17.6807426 43.9100586,17.2463414 43.8706378,16.7935536 C43.8867749,16.3390646 43.7139538,15.8982135 43.3933222,15.5759644 C42.787452,14.9746785 41.8105258,14.9746785 41.2046556,15.5759644 C40.9252497,15.8258215 40.7610219,16.1798385 40.7506236,16.5546964 C40.7428382,16.8693076 40.8170663,17.180523 40.9659978,17.4576931 C41.08833,17.6969573 41.2734635,17.8983575 41.5015226,18.0402717 C41.7485191,18.1713005 42.0254019,18.2355589 42.3048098,18.2266969 L42.2989889,18.25 Z M46.6811575,18.2476757 C47.1001721,18.2718134 47.5076629,18.1069581 47.7891501,17.7994238 C48.0859033,17.5038719 48.2513168,17.1037779 48.2488492,16.6875264 C48.2655795,16.2709827 48.1028192,15.8669464 47.8009372,15.5756289 C47.1875046,14.9747904 46.1983846,14.9747904 45.584952,15.5756289 C45.2848837,15.8594021 45.1182697,16.2539599 45.1252529,16.6642406 C45.1227852,17.0804921 45.2881987,17.4805861 45.584952,17.776138 C45.8651141,18.0820356 46.2700553,18.2467356 46.687051,18.2243899 L46.6811575,18.2476757 Z" id="Shape"></path>
		</g>

		<g id="export">
            <path d="M40.1739717,51.3248669 C39.8741217,51.0491142 39.7006079,50.6623666 39.6940003,50.255051 C39.6831599,49.9128743 39.7566388,49.5732826 39.9079634,49.2661942 C40.196054,48.7174072 40.774888,48.3840709 41.3941401,48.4103415 L47.3561952,48.4103415 C48.0382818,48.3889894 48.584459,47.8377314 48.5994947,47.1554763 L48.5994947,22.4109238 C48.5846096,21.7308268 48.0418019,21.1804097 47.361978,21.1560587 L16.666936,21.1560587 C16.3217936,21.1495503 15.9892129,21.285511 15.7474726,21.5319399 C15.5073635,21.7591004 15.3802956,22.0810059 15.4005053,22.4109238 L15.4005053,47.1612591 C15.3777167,47.4932767 15.5050622,47.8180078 15.7474726,48.0460258 C15.9876324,48.2906076 16.3184802,48.4246218 16.6611532,48.4161243 L22.6521222,48.4161243 C23.0919733,48.4159295 23.5116587,48.6005911 23.8086799,48.9250097 C24.1199426,49.2616527 24.3004543,49.6985732 24.3175653,50.1567436 C24.2934242,51.0769009 23.5548428,51.8180203 22.6347738,51.8453179 L14.5157386,51.8453179 C13.8458505,51.8601793 13.2024338,51.5838266 12.7519881,51.0877726 C12.2660012,50.6210994 11.9940252,49.9746332 12.0002255,49.3008909 L12.0002255,14.5174173 C11.9910302,13.8414011 12.2633581,13.1920037 12.7519881,12.7247529 C13.2113823,12.2384084 13.8588444,11.9747838 14.5273042,12.0019043 L49.4726958,12.0019043 C50.1411556,11.9747838 50.7886177,12.2384084 51.2480119,12.7247529 C51.7366419,13.1920037 52.0089698,13.8414011 51.9997745,14.5174173 L51.9997745,49.3008909 C52.0075753,49.9766357 51.7354708,50.6255001 51.2480119,51.0935554 C50.7913122,51.5768019 50.1487447,51.8401493 49.4842614,51.816404 L41.3883573,51.816404 C40.9348771,51.8175743 40.4989654,51.6411338 40.1739717,51.3248669 Z M32.0780676,32.7332015 C32.6556019,32.7158694 33.2173568,32.923159 33.6452034,33.3114804 C34.0567039,33.678442 34.2887731,34.205872 34.2813101,34.7571775 L34.2813101,42.3673274 C34.2794815,42.6804235 34.404673,42.9808832 34.6282774,43.2000489 C34.8423235,43.4241591 35.1395404,43.5497437 35.4494334,43.5470162 L38.4275696,43.5470162 C38.8981301,43.5173058 39.3326612,43.7991638 39.4973855,44.2409509 C39.7081547,44.6813069 39.6099479,45.2074146 39.2545083,45.5420783 L33.3965435,51.3248669 C32.6554512,52.0379401 31.4833357,52.0379401 30.7422435,51.3248669 L24.8784958,45.5420783 C24.5273527,45.2125975 24.4271092,44.6950612 24.6298359,44.2582992 C24.7929926,43.8152571 25.2285844,43.5327111 25.6996518,43.5643646 L28.6951363,43.5643646 C29.0007453,43.5709259 29.2941084,43.4442944 29.4989439,43.2173973 C29.7119788,42.9912288 29.835325,42.6951979 29.8459112,42.3846757 L29.8459112,34.745612 C29.8378837,34.1892665 30.0798407,33.6586591 30.5051491,33.2999148 C30.9340923,32.9045665 31.5007589,32.6928449 32.0838504,32.7100704 L32.0780676,32.7332015 Z M37.6353275,18.1258774 C38.046324,18.1490095 38.4458038,17.9853928 38.7224918,17.6806027 C39.0232709,17.3834772 39.1884932,16.97565 39.1793321,16.5529589 C39.1876102,16.1451314 39.0238987,15.7526436 38.7282746,15.4715775 C38.1243978,14.874053 37.15204,14.874053 36.5481633,15.4715775 C36.2525391,15.7526436 36.0888276,16.1451314 36.0971057,16.5529589 C36.0927421,16.9668189 36.2553402,17.3649758 36.5481633,17.6574716 C36.826152,17.9638896 37.2281345,18.1276602 37.6411103,18.1027463 L37.6353275,18.1258774 Z M42.3714314,18.1258774 C42.7208321,18.1051544 43.05918,17.995689 43.3545055,17.8078241 C43.7461903,17.5839526 43.9719468,17.1527575 43.9327843,16.7033114 C43.9590854,16.2447784 43.7887157,15.7967692 43.4643784,15.4715775 C42.8637853,14.8715612 41.8906431,14.8715612 41.2900499,15.4715775 C41.0130341,15.7200052 40.8500005,16.0711546 40.8389924,16.443086 C40.8282056,16.7556887 40.9021349,17.0653927 41.0529556,17.3394182 C41.1719608,17.5786649 41.3564546,17.7792017 41.5849721,17.9176971 C41.8283509,18.047535 42.1015019,18.1113367 42.3772142,18.1027463 L42.3714314,18.1258774 Z M47.1075353,18.1258774 C47.5185317,18.1490095 47.9180116,17.9853928 48.1946995,17.6806027 C48.4858743,17.3870137 48.6481783,16.989577 48.6457571,16.5760901 C48.6621729,16.162313 48.5024722,15.7609601 48.2062651,15.4715775 C47.604364,14.8747294 46.6338377,14.8747294 46.0319366,15.4715775 C45.7375091,15.7534659 45.5740272,16.1454032 45.5808791,16.5529589 C45.5784578,16.9664458 45.7407618,17.3638826 46.0319366,17.6574716 C46.3073196,17.9606438 46.7043035,18.1241078 47.1133181,18.1027463 L47.1075353,18.1258774 Z" id="Shape"></path>
		</g>

		<g id="feedback">
            <path d="M42.2227521,44.301719 L47.91,44.301719 C50.1688446,44.301719 52,42.4705637 52,40.211719 L52,19.09 C52,16.8311554 50.1688446,15 47.91,15 L16.09,15 L16.09,15 C13.8311554,15 12,16.8311554 12,19.09 L12,19.09 L12,40.211719 C12,42.4705637 13.8311554,44.301719 16.09,44.301719 L30.8299371,44.301719 L36.5263446,49.9981266 L42.2227521,44.301719 Z" id="Combined-Shape"></path>
		</g>

		<g id="hamburger">
			<path d="M19.18,24.56A1.81,1.81,0,0,1,17.82,24a1.88,1.88,0,0,1-.59-1.38V19.94a2,2,0,0,1,1.95-2H45a1.8,1.8,0,0,1,1.68,1,1.89,1.89,0,0,1,.27,1v2.67a1.82,1.82,0,0,1-1,1.7,1.78,1.78,0,0,1-1,.25Zm0,10.67a1.91,1.91,0,0,1-1.36-.56,1.86,1.86,0,0,1-.59-1.38v-2.7a1.84,1.84,0,0,1,.59-1.37,1.91,1.91,0,0,1,1.36-.56H45a1.94,1.94,0,0,1,1.37.56,1.87,1.87,0,0,1,.58,1.37v2.7a1.9,1.9,0,0,1-2,1.94Zm0,10.69a1.85,1.85,0,0,1-1.36-.58A1.89,1.89,0,0,1,17.23,44V41.3a1.91,1.91,0,0,1,.59-1.39,1.83,1.83,0,0,1,1.36-.56H45a1.86,1.86,0,0,1,1.37.56,1.94,1.94,0,0,1,.58,1.39V44a1.92,1.92,0,0,1-.58,1.37,1.88,1.88,0,0,1-1.37.58Z"></path>
		</g>

		<g id="undo">
            <path d="M29.9304619,49.5195206 C29.3985098,49.4600973 28.876552,49.6958202 28.5694095,50.1341894 C28.3766948,50.4544294 28.2614324,50.8152507 28.2328052,51.1879074 L28.2328052,55.578399 C28.2174697,56.1221407 27.9018257,56.6125162 27.4132467,56.8516415 C26.9346552,57.1062406 26.3473379,57.0298893 25.9497496,56.6613869 L12.6611951,45.3339187 C12.2397772,44.9459651 12,44.3993175 12,43.8265166 C12,43.2537156 12.2397772,42.707068 12.6611951,42.3191145 L25.9497496,31.3428856 C26.3439892,30.9695175 26.9316308,30.8872477 27.4132467,31.137996 C27.8975501,31.3353913 28.2191895,31.8006197 28.2328052,32.3234287 L28.2328052,36.5383006 C28.2204371,36.9739159 28.4028454,37.392382 28.7303942,37.6798284 C29.0491877,37.9956538 29.4817676,38.1697408 29.9304619,38.1627825 L39.6334483,38.1627825 C40.0837236,38.1784941 40.5196454,38.0030622 40.833516,37.6798284 C41.1353696,37.3779521 41.2994815,36.9650254 41.2872001,36.5383006 L41.2872001,26.937759 C41.2944124,26.5119446 41.1310585,26.1009251 40.833516,25.7962312 C40.5141714,25.482887 40.080621,25.3136966 39.6334483,25.3279121 L17.2565763,25.3279121 C16.7461588,25.3007839 16.2650126,25.0811302 15.9101589,24.7132433 C15.5126177,24.3329874 15.2991308,23.7992701 15.32476,23.2497461 L15.32476,16.0786099 C15.2991308,15.5290859 15.5126177,14.9953686 15.9101589,14.6151127 C16.2650126,14.2472259 16.7461588,14.0275722 17.2565763,14.0004439 L48.2680817,14.0004439 C49.2561943,13.9848104 50.2059006,14.382732 50.8877416,15.0980668 C51.6002078,15.8071584 52.0005212,16.7710708 51.9999995,17.7762666 L51.9999995,45.7144279 C51.9982462,46.7148742 51.5979832,47.6733988 50.8877416,48.3779928 C50.2059006,49.0933276 49.2561943,49.4912492 48.2680817,49.4756157 L29.9304619,49.5195206 Z" id="Shape"></path>
		</g>

		<g id="redo">
            <path d="M34.0658929,13.5551815 C34.5934784,13.6091249 35.1090315,13.3737638 35.4138758,12.939798 C35.6178122,12.6286594 35.7388573,12.2705679 35.7655235,11.8995069 L35.7655235,7.4306508 C35.7569812,6.88336168 36.0733298,6.38295566 36.5713828,6.1559279 C37.0487685,5.89156516 37.6426552,5.96877043 38.0365815,6.34640374 L51.355238,17.6870419 C51.7700702,18.0605627 52.0048035,18.5940474 51.9999255,19.1522407 C51.9992703,19.7092814 51.7654822,20.2406179 51.355238,20.6174394 L38.0365815,31.6064299 C37.6398968,31.9760838 37.0543298,32.0580632 36.5713828,31.8115577 C36.092255,31.6094504 35.7766419,31.1446383 35.7655235,30.6247468 L35.7655235,26.4782344 C35.7779059,26.0421126 35.5952855,25.6231599 35.2673559,25.3353793 C34.9431678,25.0286568 34.5121439,24.8604524 34.0658929,24.8665157 L24.3516253,24.8665157 C23.9039327,24.8522837 23.4698782,25.0216708 23.1501624,25.3353793 C22.8522739,25.6404274 22.68873,26.0519249 22.6959508,26.4782344 L22.6959508,36.133894 C22.6767541,36.5580063 22.8424583,36.9695942 23.1501624,37.262097 C23.4643978,37.5857066 23.9008264,37.7613425 24.3516253,37.7456126 L46.7984699,37.7456126 C47.3094809,37.7727724 47.7911864,37.9926815 48.1464528,38.3609961 C48.5444561,38.7416941 48.7581912,39.2760319 48.7325323,39.8261948 L48.7325323,47.0349726 C48.7417689,48.1265614 47.8887147,49.0313158 46.7984699,49.0862508 L15.7509088,49.0862508 C14.7616473,49.1019025 13.8108368,48.7035182 13.128203,47.9873518 C12.4197814,47.2789227 12.015116,46.3224408 12,45.3206901 L12,17.3353942 C12.0113125,16.32855 12.4162665,15.3661267 13.128203,14.6540806 C13.8108368,13.9379141 14.7616473,13.5395299 15.7509088,13.5551815 L34.0658929,13.5551815 Z" id="Shape"></path>
		</g>

		</defs>
	</svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);
