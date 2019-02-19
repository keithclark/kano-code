import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<iron-iconset-svg name="parts" size="64">
<svg>
    <defs>
        <g id="box">
            <path d="M52.72,8.09H11.26A3.22,3.22,0,0,0,8,11.31V52.78A3.22,3.22,0,0,0,11.26,56H52.72a3.22,3.22,0,0,0,3.22-3.22V11.31A3.22,3.22,0,0,0,52.72,8.09Zm-38.62,6a1.56,1.56,0,0,1,2.21,0l4.43,4.43a1.56,1.56,0,1,1-2.21,2.21L14.1,16.29A1.56,1.56,0,0,1,14.1,14.07Zm6.71,31.44-4.43,4.43a1.56,1.56,0,1,1-2.21-2.21L18.6,43.3a1.56,1.56,0,0,1,2.21,2.21ZM37.33,37.3a1.56,1.56,0,0,1-2.21,0l-3-3-3,3a1.56,1.56,0,1,1-2.21-2.21l3-3-3-3A1.56,1.56,0,0,1,29,26.79l3,3,3-3A1.56,1.56,0,0,1,37.3,29l-3,3,3,3A1.56,1.56,0,0,1,37.33,37.3Zm6-18.72,4.43-4.43A1.56,1.56,0,0,1,50,16.36l-4.43,4.43a1.56,1.56,0,0,1-2.21-2.21ZM50,50a1.56,1.56,0,0,1-2.21,0l-4.43-4.43a1.56,1.56,0,1,1,2.21-2.21L50,47.8A1.56,1.56,0,0,1,50,50Z"></path>
        </g>

        <g id="button">
            <path d="M51.06,12.85v38.3H12.77V12.85h38.3M52.69,8H11.15a3.23,3.23,0,0,0-3.23,3.23V52.77A3.23,3.23,0,0,0,11.15,56H52.69a3.23,3.23,0,0,0,3.23-3.23V11.23A3.23,3.23,0,0,0,52.69,8Z"></path><path d="M42.35,21.56V42.44H21.48V21.56H42.35m3-5.07H18.5a2.09,2.09,0,0,0-2.09,2.09V45.42A2.09,2.09,0,0,0,18.5,47.5H45.33a2.09,2.09,0,0,0,2.09-2.09V18.58a2.09,2.09,0,0,0-2.09-2.09Z"></path><path d="M34.3,29.62v4.76H29.54V29.62H34.3M37.95,25H25.89a.94.94,0,0,0-.94.94V38a.94.94,0,0,0,.94.94H37.95a.94.94,0,0,0,.94-.94V26a.94.94,0,0,0-.94-.94Z"></path>
        </g>

        <g id="clock">
            <path d="M32,12.5A19.53,19.53,0,1,0,51.55,32,19.55,19.55,0,0,0,32,12.5Zm-.08,36a1.22,1.22,0,1,1,1.22-1.22A1.22,1.22,0,0,1,31.93,48.48Zm0-30.88a1.22,1.22,0,1,1,1.22-1.22A1.22,1.22,0,0,1,31.93,17.61ZM48.59,31.83a1.22,1.22,0,1,1-1.22-1.22A1.22,1.22,0,0,1,48.59,31.83Zm-30.88,0a1.22,1.22,0,1,1-1.22-1.22A1.22,1.22,0,0,1,17.71,31.83Zm21.62,1.85H31.88a1.76,1.76,0,0,1-1.34-.63L23.3,24.42A1.75,1.75,0,0,1,26,22.17l6.71,8h6.64a1.75,1.75,0,1,1,0,3.51Z"></path>
        </g>

        <g id="gyro-accelerometer">
            <path d="M32,45.33a19.61,19.61,0,0,1-6.72-1.18V54.4A1.56,1.56,0,0,0,26.86,56H37.18a1.56,1.56,0,0,0,1.56-1.56V44.15A19.61,19.61,0,0,1,32,45.33ZM29.23,52.9a1,1,0,1,1,1-1A1,1,0,0,1,29.23,52.9Zm5.57,0a1,1,0,1,1,1-1A1,1,0,0,1,34.8,52.9Z"></path><path d="M39.56,20.93a3.75,3.75,0,0,1-3.75-3.75A3.7,3.7,0,0,1,36,16.12,10.39,10.39,0,1,0,41,20.62,3.73,3.73,0,0,1,39.56,20.93Z"></path><path d="M32,8A17.69,17.69,0,1,0,49.71,25.69,17.69,17.69,0,0,0,32,8Zm0,30.14a12.45,12.45,0,1,1,5.11-23.79,3.72,3.72,0,0,1,2.43-.92,3.75,3.75,0,0,1,3.11,5.85A12.42,12.42,0,0,1,32,38.14Z"></path><circle cx="39.56" cy="17.16" r="1.66"></circle>
        </g>

        <g id="iss">
            <path d="M18.36,33.16A2.12,2.12,0,0,1,16.24,31,14.75,14.75,0,0,1,31,16.3a2.12,2.12,0,1,1,0,4.25A10.5,10.5,0,0,0,20.49,31,2.12,2.12,0,0,1,18.36,33.16Z"></path><path d="M8.51,31.94a2.12,2.12,0,0,1-2.12-2.12A23.39,23.39,0,0,1,29.76,6.44a2.12,2.12,0,1,1,0,4.25A19.14,19.14,0,0,0,10.64,29.81,2.12,2.12,0,0,1,8.51,31.94Z"></path><path d="M48.69,25.66l1,1.05a16.48,16.48,0,0,1,0,23.19,16,16,0,0,1-23,0l-1-1.19L36.09,38.26,33,35.13A5,5,0,1,1,35.07,33l3.12,3.12,10.5-10.5m-18,7.05a2,2,0,1,0-2-2,2,2,0,0,0,2,2"></path>
        </g>

        <g id="light-animation">
            <path d="M48.39,13.32h0c-.3-.07-.61-.14-.93-.19s-.62-.09-.91-.1A11,11,0,0,0,36,18.95c-.15.28-.29.56-.41.86s-.23.58-.33.88a11.31,11.31,0,0,0,.92,9.07l-.32.21a1.19,1.19,0,0,0-.32,1.63,1.15,1.15,0,0,0,1,.52,1.14,1.14,0,0,0,.64-.2l.4-.25a10.91,10.91,0,0,0,8.19,3.73,11.22,11.22,0,0,0,2.66-22.07Z"></path><path d="M20.26,37.26Q19.61,36.09,18.9,35a1.14,1.14,0,0,0-1.6-.31A1.19,1.19,0,0,0,17,36.33q.66,1,1.26,2.08a1.15,1.15,0,0,0,1,.6,1.13,1.13,0,0,0,.56-.15A1.18,1.18,0,0,0,20.26,37.26Z"></path><path d="M22.43,46a1.18,1.18,0,0,0,.79-1.45q-.36-1.3-.8-2.5a1.15,1.15,0,0,0-1.48-.7,1.18,1.18,0,0,0-.69,1.51q.41,1.13.75,2.33a1.16,1.16,0,0,0,1.11.85A1.18,1.18,0,0,0,22.43,46Z"></path><path d="M9.64,25.9c-.74-.49-1.48-.93-2.22-1.34A1.14,1.14,0,0,0,5.85,25a1.18,1.18,0,0,0,.46,1.59c.69.38,1.38.8,2.08,1.26a1.13,1.13,0,0,0,.62.19,1.15,1.15,0,0,0,1-.54A1.18,1.18,0,0,0,9.64,25.9Z"></path><path d="M13.77,29.08a1.14,1.14,0,0,0-1.63.1,1.19,1.19,0,0,0,.09,1.66c.59.53,1.17,1.1,1.73,1.7a1.14,1.14,0,0,0,1.63,0,1.19,1.19,0,0,0,0-1.66Q14.72,29.94,13.77,29.08Z"></path><path d="M24,48.8a1.14,1.14,0,0,0-.45,0,1.1,1.1,0,0,0-.51,0A1.17,1.17,0,0,0,22,50c.05.36.1.71.14,1.08a1.05,1.05,0,0,0,.37.79,1.14,1.14,0,0,0,1.3.18,1.17,1.17,0,0,0,.62-.93c0-.15.11-.45.25-.89A1.18,1.18,0,0,0,24,48.8Z"></path><path d="M32.42,32.77q-.8.77-1.52,1.59A1.19,1.19,0,0,0,31,36a1.14,1.14,0,0,0,1.63-.08q.67-.75,1.41-1.46a1.19,1.19,0,0,0,0-1.66A1.14,1.14,0,0,0,32.42,32.77Z"></path><path d="M28.2,37.81c-.42.61-.82,1.22-1.19,1.83a1.18,1.18,0,0,0,.37,1.62,1.14,1.14,0,0,0,.61.18,1.15,1.15,0,0,0,1-.55c.35-.57.72-1.15,1.12-1.72a1.18,1.18,0,0,0-.28-1.63A1.14,1.14,0,0,0,28.2,37.81Z"></path><path d="M26.47,42.94a1.15,1.15,0,0,0-1.54.54c-.33.69-.63,1.36-.9,2a1.18,1.18,0,0,0,.6,1.54,1.12,1.12,0,0,0,.46.1,1.15,1.15,0,0,0,1.06-.71c.26-.6.54-1.23.86-1.89A1.18,1.18,0,0,0,26.47,42.94Z"></path>
        </g>

        <g id="light-animation-display">
            <path d="M32.23,9.13A22.92,22.92,0,1,0,55.15,32,22.92,22.92,0,0,0,32.23,9.13ZM40.4,32.93l-13.68,8a.85.85,0,0,1-.91,0,.81.81,0,0,1-.44-.8V23.29a.81.81,0,0,1,.44-.8.85.85,0,0,1,.91,0l13.68,8a1.42,1.42,0,0,1,0,2.44Z"></path>
        </g>

        <g id="light-circle">
            <rect x="11" y="23.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="11" y="29.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="17.06" y="23.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="17.06" y="29.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="23.12" y="23.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="23.12" y="29.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="29.19" y="23.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="29.19" y="29.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="11" y="35.35" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="17.06" y="35.35" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="23.12" y="35.35" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="29.19" y="35.35" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="35.29" y="23.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="35.29" y="29.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="35.29" y="35.35" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="41.41" y="23.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="41.41" y="29.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="41.41" y="35.35" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="47.52" y="23.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="47.52" y="29.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="47.52" y="35.35" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="17.06" y="41.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="23.12" y="41.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="29.19" y="41.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="23.12" y="47.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="29.19" y="47.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="35.29" y="41.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="35.29" y="47.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="41.41" y="41.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="17.06" y="16.94" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="23.12" y="16.94" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="29.19" y="16.94" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="35.29" y="16.94" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="41.41" y="16.94" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="23.12" y="10.85" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="29.19" y="10.85" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="35.29" y="10.85" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect>
        </g>

        <g id="light-frame">
            <path d="M52.12,48V43.36H56V20.67H52.12V16H56V11a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5h3.88v4.67H8V43.36h3.88V48H8v5a3,3,0,0,0,3,3H53a3,3,0,0,0,3-3V48ZM23.88,48H16.12V43.36h7.76Zm0-27.36H16.12V16h7.76ZM35.88,48H28.12V43.36h7.76Zm0-27.36H28.12V16h7.76ZM47.88,48H40.12V43.36h7.76Zm0-27.36H40.12V16h7.76Z"></path>
        </g>

        <g id="light-rectangle">
            <rect x="8" y="20.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="8" y="26.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="14.06" y="20.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="14.06" y="26.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="20.12" y="20.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="20.12" y="26.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="26.18" y="20.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="26.18" y="26.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="8" y="32.34" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="14.06" y="32.34" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="20.12" y="32.34" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="26.18" y="32.34" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="32.29" y="20.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="32.29" y="26.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="32.29" y="32.34" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="38.41" y="20.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="38.41" y="26.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="38.41" y="32.34" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="44.52" y="20.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="44.52" y="26.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="44.52" y="32.34" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="8" y="38.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="14.06" y="38.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="20.12" y="38.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="26.18" y="38.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="8" y="44.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="14.06" y="44.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="20.12" y="44.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="26.18" y="44.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="32.29" y="38.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="32.29" y="44.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="38.41" y="38.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="38.41" y="44.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="44.52" y="38.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="44.52" y="44.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="50.69" y="20.09" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="8" y="14" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="14.06" y="14" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="20.12" y="14" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="26.18" y="14" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="32.29" y="14" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="38.41" y="14" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="44.52" y="14" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="50.69" y="14" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="50.69" y="26.22" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="50.69" y="32.34" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="50.69" y="38.49" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect><rect x="50.69" y="44.62" width="5.31" height="5.31" rx="1.29" ry="1.29"></rect>
        </g>

        <g id="map">
            <path d="M20.54,8.26,10.43,12.74a1.91,1.91,0,0,0-1.14,1.82V48.18A1.71,1.71,0,0,0,11.47,50l10.11-4.47a1.91,1.91,0,0,0,1.14-1.82V10.08A1.71,1.71,0,0,0,20.54,8.26Z"></path><path d="M37.93,18.34,27.81,9.39c-1.1-.84-2.58.07-2.58,1.6V44.06a2,2,0,0,0,.75,1.6L36.1,54.61c1.1.84,2.58-.07,2.58-1.6V19.94A2,2,0,0,0,37.93,18.34Z"></path><path d="M52.44,14,42.33,18.47a1.91,1.91,0,0,0-1.14,1.82V53.92a1.71,1.71,0,0,0,2.18,1.82l10.11-4.47a1.91,1.91,0,0,0,1.14-1.82V15.82A1.71,1.71,0,0,0,52.44,14Z"></path>
        </g>

        <g id="microphone">
            <circle cx="43.55" cy="21.18" r="9.27" transform="translate(-2.22 37) rotate(-45)"></circle><path d="M40.38,32.42a10.58,10.58,0,0,1-5.21-2.86l-.27-.28h0v0a10.57,10.57,0,0,1-2.65-5.35,1.49,1.49,0,0,0-1.75.42L13.56,44.84a1.49,1.49,0,0,0,.1,2l.83.83-2.68,2.68a1.35,1.35,0,0,0,1.9,1.9l2.68-2.68.92.92a1.49,1.49,0,0,0,2,.1L39.84,33.69A1.49,1.49,0,0,0,40.38,32.42ZM30.21,36.1a1.54,1.54,0,1,1,0-2.18A1.54,1.54,0,0,1,30.21,36.1Z"></path>
        </g>

        <g id="motion-sensor">
            <path d="M32,44.08a14.59,14.59,0,0,1-6.79-1.67v12A1.58,1.58,0,0,0,26.82,56H37.26a1.58,1.58,0,0,0,1.58-1.58v-12A14.59,14.59,0,0,1,32,44.08Zm-2.81,8.75a1,1,0,1,1,1-1A1,1,0,0,1,29.23,52.84Zm5.63,0a1,1,0,1,1,1-1A1,1,0,0,1,34.86,52.84Z"></path><path d="M45.24,20.46a13.23,13.23,0,0,0-26.4,0s-.09,8.34-.09,8.45a13.29,13.29,0,0,0,26.58,0C45.33,28.8,45.24,20.46,45.24,20.46ZM32,33.07a4.48,4.48,0,0,1-4.48-4.48s0-7.19,0-7.19a4.46,4.46,0,0,1,8.91,0s0,7.15,0,7.19A4.48,4.48,0,0,1,32,33.07Z"></path>
        </g>

        <g id="oscillator">
            <path d="M32.23,7.13A24.92,24.92,0,1,0,57.15,32,24.95,24.95,0,0,0,32.23,7.13Zm0,45.84a20.93,20.93,0,0,1-20.68-17.9,1.42,1.42,0,0,0,.15.3A12.29,12.29,0,0,0,15.16,39a1.43,1.43,0,1,0,1.56-2.4,9.48,9.48,0,0,1-2.63-2.81,1.43,1.43,0,0,0-2.62.73c-.07-.6-.11-1.21-.13-1.82a1.41,1.41,0,0,0,1.13-2,20.27,20.27,0,0,1-.73-1.94,1.43,1.43,0,0,0-.12-.28,20.9,20.9,0,1,1,40.85,8.68,5.47,5.47,0,0,1-2.41-1.48,1.43,1.43,0,0,0-2,2,8.36,8.36,0,0,0,3.53,2.18A20.94,20.94,0,0,1,32.23,53Z"></path><path d="M30.07,21.49a19.14,19.14,0,0,0-2.57,4.09,1.43,1.43,0,1,0,2.58,1.23,16.31,16.31,0,0,1,2.17-3.48,1.43,1.43,0,1,0-2.19-1.85Z"></path><path d="M27.91,28.33a1.43,1.43,0,0,0-1.82.89A22.48,22.48,0,0,1,24.35,33a1.43,1.43,0,1,0,2.47,1.44,25.44,25.44,0,0,0,2-4.32A1.43,1.43,0,0,0,27.91,28.33Z"></path><path d="M22.35,35.71a5,5,0,0,1-3,1.6,1.43,1.43,0,0,0,.13,2.85h.14a7.8,7.8,0,0,0,4.76-2.42,1.43,1.43,0,1,0-2-2Z"></path><path d="M44.24,27.49a1.43,1.43,0,0,0,.68-1.91,19.1,19.1,0,0,0-2.56-4.09,1.43,1.43,0,1,0-2.19,1.84,16.29,16.29,0,0,1,2.17,3.48,1.43,1.43,0,0,0,1.91.68Z"></path><path d="M39,18.81a6.67,6.67,0,0,0-5.49,0,1.43,1.43,0,0,0,1.16,2.61,3.75,3.75,0,0,1,3.16,0A1.43,1.43,0,1,0,39,18.81Z"></path><path d="M48.07,33a22.6,22.6,0,0,1-1.74-3.82,1.43,1.43,0,0,0-2.7.94,25.5,25.5,0,0,0,2,4.32A1.43,1.43,0,0,0,48.07,33Z"></path>
        </g>

        <g id="text">
            <path d="M53,8H11a3,3,0,0,0-3,3V53a3,3,0,0,0,3,3H53a3,3,0,0,0,3-3V11A3,3,0,0,0,53,8ZM45.5,20.5v3a2,2,0,1,1-4,0v-1H34v19h3a2,2,0,1,1,0,4H27a2,2,0,1,1,0-4h3v-19H22.5v1a2,2,0,0,1-4,0v-5h27Z"></path>
        </g>

        <g id="text-input">
            <path d="M54.34,17.91H9.66A1.67,1.67,0,0,0,8,19.57V45.05a1.67,1.67,0,0,0,1.66,1.66H54.34A1.67,1.67,0,0,0,56,45.05V19.57A1.67,1.67,0,0,0,54.34,17.91ZM40.72,25.71h1a1.88,1.88,0,0,1,0,3.77h-1a1.88,1.88,0,0,1,0-3.77Zm-7.66,0h1.34a1.88,1.88,0,0,1,0,3.77H33.05a1.88,1.88,0,1,1,0-3.77Zm-16.84,0H26.59a1.88,1.88,0,1,1,0,3.77H16.21a1.88,1.88,0,0,1,0-3.77Zm3.31,13.86H16.21a1.88,1.88,0,0,1,0-3.77h3.31a1.88,1.88,0,1,1,0,3.77Zm29.85,0H25.88a1.88,1.88,0,1,1,0-3.77H49.37a1.88,1.88,0,0,1,0,3.77Z"></path>
        </g>

        <g id="share">
            <path class="cls-1" d="M37.34,47.52a15.84,15.84,0,0,0,9.78-9.59A77.14,77.14,0,0,1,26.94,47.5,15.84,15.84,0,0,0,37.34,47.52ZM57.6,25.63c0-.08,0-.11,0-.13a.16.16,0,0,1,0-.06.53.53,0,0,0,0-.08.6.6,0,0,0,0-.08l0-.15L57.4,25a2.66,2.66,0,0,0-.25-.46,3.32,3.32,0,0,0-1.24-1A9.09,9.09,0,0,0,52,22.9a38,38,0,0,0-6.54.86,15.92,15.92,0,0,0-29.22,9.38c-.44.19-.87.39-1.3.6a32.78,32.78,0,0,0-4.48,2.53,13.37,13.37,0,0,0-2.2,1.83A6.68,6.68,0,0,0,7.2,39.57a4.36,4.36,0,0,0-.42,1.21c0,.07,0,.11,0,.19l0,.29a4.3,4.3,0,0,0,0,.57l0,.18,0,.08,0,.15a2.88,2.88,0,0,0,.1.33h0s0,0,0,0l0,.1.1.22a3.44,3.44,0,0,0,.22.4,4.05,4.05,0,0,0,.54.63,4.67,4.67,0,0,0,1.07.73,7,7,0,0,0,1.76.59,16.47,16.47,0,0,0,2.9.29,32.1,32.1,0,0,0,4.66-.28l.55-.07c1.1-.13,2.18-.3,3.23-.51,2.19-.4,4.3-.91,6.35-1.46,3-.89,5.89-1.8,8.59-2.85a73.69,73.69,0,0,0,7.41-3.32c1.24-.63,2.41-1.27,3.5-1.91.53-.3,1-.61,1.54-.91l1-.6a39,39,0,0,0,4.41-3.21,9.82,9.82,0,0,0,2.57-3.08A3.23,3.23,0,0,0,57.6,25.63ZM18,40.09a36.64,36.64,0,0,1-4.47.56,13.79,13.79,0,0,1-1.57,0h0c.32-.34.7-.69,1.09-1a36.81,36.81,0,0,1,3.71-2.72l.11-.08c.08.29.17.57.27.85a15.28,15.28,0,0,0,1.06,2.4ZM54.66,26.15h0a.11.11,0,0,1,0-.05l0,0-.05,0,0,0a6.77,6.77,0,0,1-1.88,1.79,29,29,0,0,1-4.24,2.42l-.47.23a16.18,16.18,0,0,0-.74-3.21,13.62,13.62,0,0,0-.58-1.44,32.89,32.89,0,0,1,5.36-.3,6.71,6.71,0,0,1,2.57.48c.06-.1,0-.12.08.05h0s0,0,0,0Z"></path>
        </g>

        <g id="sticker">
            <circle cx="18.65" cy="44.55" r="10.27"></circle><rect x="34.84" y="9.85" width="20.17" height="20.17" rx="2.63" ry="2.63"></rect><path d="M42.3,35.74,33.86,50.37a2.91,2.91,0,0,0,2.52,4.37H53.27a2.91,2.91,0,0,0,2.52-4.37L47.35,35.74A2.91,2.91,0,0,0,42.3,35.74Z"></path><path d="M20.66,30.17l8.62-6.26a2.54,2.54,0,0,0,.92-2.84L26.91,10.94a2.54,2.54,0,0,0-2.42-1.76H13.84a2.54,2.54,0,0,0-2.42,1.76L8.13,21.07a2.54,2.54,0,0,0,.92,2.84l8.62,6.26A2.54,2.54,0,0,0,20.66,30.17Z"></path>
        </g>

        <g id="picture">
            <rect x="8" y="8" width="48" height="48" rx="3.01" ry="3.01"></rect><circle class="cls-1" cx="41.06" cy="18.79" r="3.21"></circle><path class="cls-1" d="M48.45,49.49a.91.91,0,0,1-.94.59l-31,0a1.21,1.21,0,0,1-1.19-.77,1.17,1.17,0,0,1,.18-1.36L26.58,34.41a1.85,1.85,0,0,1,1.5-.73,1.88,1.88,0,0,1,1.5.7l4.23,4.91a1.79,1.79,0,0,0,1.33.57,1.61,1.61,0,0,0,1.26-.54L37.55,38a1.42,1.42,0,0,1,1.08-.45,1.47,1.47,0,0,1,1.12.49l8.56,10.3A1,1,0,0,1,48.45,49.49Z"></path>
        </g>

        <g id="picture-list">
            <rect x="54.93" y="20.14" width="4.82" height="23.72" rx="1.03" ry="1.03"></rect><rect x="4.26" y="20.14" width="4.82" height="23.72" rx="1.03" ry="1.03"></rect><rect x="12.67" y="12.67" width="38.67" height="38.67" rx="1.74" ry="1.74"></rect><rect x="54.93" y="20.14" width="4.82" height="23.72" rx="1.03" ry="1.03"></rect><rect x="4.26" y="20.14" width="4.82" height="23.72" rx="1.03" ry="1.03"></rect><circle class="cls-1" cx="40.17" cy="21.14" r="2.93"></circle><path class="cls-1" d="M44.65,46a.72.72,0,0,1-.75.47l-24.81,0a1,1,0,0,1-.95-.61.94.94,0,0,1,.14-1.09l8.88-10.8a1.48,1.48,0,0,1,1.2-.59,1.51,1.51,0,0,1,1.2.56l3.38,3.92a1.43,1.43,0,0,0,1.06.46,1.29,1.29,0,0,0,1-.43l.92-1a1.13,1.13,0,0,1,.87-.36,1.17,1.17,0,0,1,.89.39l6.84,8.23A.83.83,0,0,1,44.65,46Z"></path>
        </g>

        <g id="rss">
            <path d="M13.62,41.86v8.67h8.67A8.68,8.68,0,0,0,13.62,41.86Z"></path><path d="M13.62,13.48V21A29.6,29.6,0,0,1,43.18,50.53h7.48A37.09,37.09,0,0,0,13.62,13.48Z"></path><path d="M13.62,27.51V35A15.55,15.55,0,0,1,29.15,50.53h7.48A23,23,0,0,0,13.62,27.51Z"></path>
        </g>

        <g id="scrolling-text">
            <path d="M55.84,35.8s-1.4,2-2,2.88a1.14,1.14,0,0,1-.9.44A1.13,1.13,0,0,1,52,37.3l2.53-3.18-2.45-3a1.09,1.09,0,0,1-.23-.69A1.12,1.12,0,0,1,53,29.3a1.14,1.14,0,0,1,.9.44l2,2.7.16-.22V19.57a1.67,1.67,0,0,0-1.66-1.66H9.66A1.67,1.67,0,0,0,8,19.57V34.63a2.31,2.31,0,0,1,0,4.59v5.83a1.67,1.67,0,0,0,1.66,1.66H54.34A1.67,1.67,0,0,0,56,45.05V36ZM17,39.25H15.86a2.32,2.32,0,1,1,0-4.64H17a2.32,2.32,0,0,1,0,4.64Zm9.29,0H25.15a2.32,2.32,0,1,1,0-4.64h1.16a2.32,2.32,0,1,1,0,4.64ZM38.66,27V37.91a1.21,1.21,0,1,1-2.43,0V27H33a1.07,1.07,0,1,1,0-2.13h8.82a1.07,1.07,0,0,1,0,2.13ZM46.92,37.2A3.59,3.59,0,0,0,49,36.55a1.12,1.12,0,0,1,.67-.23,1,1,0,0,1,1,1,1,1,0,0,1-.35.77,4.93,4.93,0,0,1-3.37,1.15c-2.91,0-4.7-1.57-4.7-5.06,0-3.2,1.67-5,4.52-5a3.88,3.88,0,0,1,4.18,4.16c0,.77,0,1.67-1.28,1.67H44.47A2.15,2.15,0,0,0,46.92,37.2Z"></path><path d="M46.73,31.1a2,2,0,0,0-2.2,2h4.14A1.87,1.87,0,0,0,46.73,31.1Z"></path>
        </g>

        <g id="slider">
            <path d="M31.49,29.7H7.85a2.35,2.35,0,1,0,0,4.69H31.49Z"></path><path d="M56.92,29.7H40.29v4.69H56.92a2.35,2.35,0,0,0,0-4.69Z"></path><path d="M40.87,44.75h-10a4.11,4.11,0,0,1-4.1-4.1V23.25a4.11,4.11,0,0,1,4.1-4.1h10a4.11,4.11,0,0,1,4.1,4.1V40.64A4.11,4.11,0,0,1,40.87,44.75Zm-9.38-4.69h8.79V23.84H31.49Z"></path><rect x="33.64" y="26.31" width="4.65" height="11.34"></rect>
        </g>

        <g id="speaker">
            <path d="M32.15,22.93a3.43,3.43,0,1,0-3.43-3.43A3.43,3.43,0,0,0,32.15,22.93Zm0-5.1a1.67,1.67,0,1,1-1.67,1.67A1.67,1.67,0,0,1,32.15,17.83Z"></path><path d="M32.15,34.87a5.66,5.66,0,1,0,5.66,5.66A5.66,5.66,0,0,0,32.15,34.87Zm0,8.46a2.8,2.8,0,1,1,2.8-2.8A2.8,2.8,0,0,1,32.15,43.33Z"></path><path d="M43.95,8H19.63a4.81,4.81,0,0,0-4.81,4.81v38.5a4.89,4.89,0,0,0,4.89,4.89H45a3.86,3.86,0,0,0,3.86-3.86V12.94A4.94,4.94,0,0,0,43.95,8Zm-11.8,4.68a6.82,6.82,0,1,1-6.82,6.82A6.82,6.82,0,0,1,32.15,12.68ZM19.73,27.21a1.3,1.3,0,1,1,1.3,1.3A1.3,1.3,0,0,1,19.73,27.21ZM32.15,51.94A11.41,11.41,0,1,1,43.56,40.53,11.41,11.41,0,0,1,32.15,51.94ZM43,28.51a1.3,1.3,0,1,1,1.3-1.3A1.3,1.3,0,0,1,43,28.51Z"></path>
        </g>

        <g id="synth">
            <path d="M50,15.88a1.21,1.21,0,1,0-1.21-1.22A1.21,1.21,0,0,0,50,15.88Z"></path><circle cx="18.96" cy="19.38" r="2.85"></circle><path d="M51.66,8.12H12.34a4.22,4.22,0,0,0-4.21,4.21V51.66a4.22,4.22,0,0,0,4.21,4.21H51.66a4.22,4.22,0,0,0,4.21-4.21V12.34A4.22,4.22,0,0,0,51.66,8.12Zm-7.54,45H37.85v-22h4.84v9.46h1.43Zm-18,0H19.87V40.59h1.43V31.13h3.41v9.46h1.43Zm-9,0H12.34a1.45,1.45,0,0,1-1.45-1.45V31.13h4.84v9.46h1.43ZM28.86,40.59H30.3V31.13h4.84v22H28.86Zm18,0h1.43V31.13h4.84V51.67a1.44,1.44,0,0,1-1.44,1.44H46.84ZM53,20.53v4.74a.64.64,0,0,1-.63.64H49.76a.64.64,0,0,1-.63-.64V20.53a.63.63,0,0,1,.63-.64h2.57A.63.63,0,0,1,53,20.53Zm-3-8a2.12,2.12,0,1,1-2.13,2.12A2.12,2.12,0,0,1,50,12.54Zm-9.34,8a.63.63,0,0,1,.64-.64h2.56a.63.63,0,0,1,.63.64v4.74a.64.64,0,0,1-.63.64H41.28a.64.64,0,0,1-.64-.64Zm-8.49,0a.63.63,0,0,1,.64-.64h2.56a.63.63,0,0,1,.63.64v4.74a.64.64,0,0,1-.63.64H32.79a.64.64,0,0,1-.64-.64ZM19,12.11a7.27,7.27,0,1,1-7.27,7.27A7.28,7.28,0,0,1,19,12.11Z"></path>
        </g>

        <g id="sports">
            <path d="M42.79,30.55c0-.44.08-.89.14-1.32v-.08c.07-.45.15-.9.25-1.35l.07-.29c.1-.44.22-.87.35-1.29l.07-.2q.19-.58.41-1.16l.09-.22c.17-.41.35-.81.55-1.21l.13-.26c.21-.4.42-.8.65-1.19v0c.23-.39.49-.77.75-1.14l.17-.25q.39-.54.82-1.06l.05-.06a19.39,19.39,0,0,1,4.54,11.27H42.78Z"></path><path d="M44.84,17.19c-.36.42-.71.85-1,1.29l-.14.2q-.46.64-.87,1.3l-.11.17c-.28.47-.55.94-.79,1.42l-.16.31c-.24.48-.46,1-.67,1.47l-.09.24q-.28.71-.52,1.44l-.07.21c-.16.52-.3,1-.42,1.57l-.08.34c-.11.53-.21,1.06-.29,1.6,0,.08,0,.17,0,.25q-.1.77-.15,1.56c0,.05,0,.1,0,.15H33.57V12.5a19.4,19.4,0,0,1,11.38,4.56Z"></path><path d="M30.22,12.57V30.72h-5c0-.05,0-.1,0-.15q0-.79-.15-1.56c0-.08,0-.16,0-.25-.08-.54-.18-1.08-.29-1.61l-.08-.33c-.12-.53-.26-1.06-.42-1.58L24.2,25q-.24-.74-.52-1.46l-.09-.23c-.2-.5-.43-1-.67-1.48l-.15-.3c-.25-.49-.51-1-.8-1.43L21.87,20q-.41-.67-.87-1.3l-.14-.2c-.32-.44-.67-.87-1-1.29l-.1-.13A19.47,19.47,0,0,1,30.22,12.57Z"></path><path d="M17.35,19.44l.05.06c.29.34.56.7.82,1.06l.18.25c.26.37.51.75.75,1.14l0,0c.23.39.45.78.65,1.19l.13.27c.2.4.38.8.55,1.21l.09.22q.22.57.41,1.16l.07.2c.13.43.25.86.35,1.3l.07.29c.1.45.18.89.25,1.35v.07c.06.44.11.88.14,1.33v.17H12.8A19.4,19.4,0,0,1,17.35,19.44Z"></path><path d="M21.82,34.07s0,.08,0,.11,0,.26-.06.39c-.06.44-.13.88-.21,1.31,0,.18-.08.37-.12.55-.09.4-.2.79-.31,1.18,0,.17-.09.33-.15.5-.17.54-.37,1.07-.59,1.58l0,.08c-.21.49-.45,1-.7,1.45l-.26.47q-.3.52-.62,1l-.32.47q-.38.55-.81,1.07l-.23.3-.06.06a19.42,19.42,0,0,1-4.48-10.56Z"></path><path d="M19.83,46.88c.34-.39.66-.8,1-1.21l.15-.21q.42-.58.8-1.18l.14-.22q.41-.66.76-1.34l.15-.3c.24-.47.46-.94.67-1.42l0-.08c.2-.47.37-.94.54-1.42l.1-.29q.24-.73.43-1.49l.07-.28c.12-.48.22-1,.3-1.46l0-.14c.09-.52.15-1,.2-1.58,0-.06,0-.11,0-.17h5V51.49A19.47,19.47,0,0,1,19.73,47Z"></path><path d="M33.57,51.57V34.07h5.9c0,.06,0,.12,0,.17.05.53.11,1.05.2,1.57l0,.14c.09.49.19,1,.3,1.46l.07.28q.19.75.43,1.49l.1.29c.16.48.34,1,.54,1.43l0,.07c.2.48.43,1,.67,1.42l.15.3c.24.46.49.9.76,1.34l.14.21q.38.61.81,1.19l.15.21c.31.42.63.82,1,1.22l.1.13A19.41,19.41,0,0,1,33.57,51.57Z"></path><path d="M47.32,44.62l-.07-.07-.2-.26q-.44-.54-.84-1.11l-.3-.45q-.34-.51-.64-1L45,41.22c-.26-.48-.5-1-.72-1.48l0,0c-.22-.52-.41-1.05-.59-1.59-.05-.16-.1-.32-.14-.48q-.17-.59-.31-1.19c0-.18-.08-.36-.12-.54-.09-.44-.16-.88-.21-1.32,0-.13,0-.25-.05-.38s0-.08,0-.11h9A19.42,19.42,0,0,1,47.32,44.62Z"></path>
        </g>

        <g id="weather">
            <path d="M16.12,32.22a7.11,7.11,0,0,1,7.33-1.51,8.77,8.77,0,0,1,3.67-4.93,7.09,7.09,0,1,0-11,6.44Z"></path><path d="M35.53,27.36A10.47,10.47,0,0,1,46,37.83c0,.3,0,.6,0,.9a6.64,6.64,0,0,1,9.41,6c0,3.39-1.95,6.19-5.81,6.57l-27-.17a8.36,8.36,0,1,1,2.93-16.21,10.47,10.47,0,0,1,10.06-7.56"></path><circle cx="23.64" cy="14.45" r="1.86" transform="translate(2.65 32.54) rotate(-72.19)"></circle><circle cx="8.11" cy="22.43" r="1.86" transform="translate(-15.73 23.29) rotate(-72.19)"></circle><circle cx="8.88" cy="31.85" r="1.86" transform="translate(-13.57 7.58) rotate(-27.19)"></circle><circle cx="30.85" cy="20.57" r="1.86" transform="translate(-5.99 16.37) rotate(-27.19)"></circle><circle cx="14.22" cy="15.23" r="1.86" transform="translate(-5.39 8.18) rotate(-27.19)"></circle>
        </g>
        <g id="lightboard">
            <path d="M51.18,10.77H26.88V7.21a.62.62,0,0,0-.62-.62H15.89a.62.62,0,0,0-.62.62v3.56H12.69a2.15,2.15,0,0,0-2.15,2.15v3.36h-1a.41.41,0,0,0-.41.41v2.38a.41.41,0,0,0,.41.41h1V50.67a2.15,2.15,0,0,0,2.15,2.15h38.5a2.15,2.15,0,0,0,2.15-2.15V12.91A2.15,2.15,0,0,0,51.18,10.77ZM22.5,47.4a.57.57,0,0,1-.57.57H15.8a.57.57,0,0,1-.57-.57V41.53A.57.57,0,0,1,15.8,41h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H15.8a.57.57,0,0,1-.57-.57V33.08a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H15.8a.57.57,0,0,1-.57-.57V24.63a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H15.8a.57.57,0,0,1-.57-.57V16.19a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57ZM31.22,47.4a.57.57,0,0,1-.57.57H24.51a.57.57,0,0,1-.57-.57V41.53a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H24.51a.57.57,0,0,1-.57-.57V33.08a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H24.51a.57.57,0,0,1-.57-.57V24.63a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H24.51a.57.57,0,0,1-.57-.57V16.19a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57ZM39.93,47.4a.57.57,0,0,1-.57.57H33.23a.57.57,0,0,1-.57-.57V41.53a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H33.23a.57.57,0,0,1-.57-.57V33.08a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H33.23a.57.57,0,0,1-.57-.57V24.63a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H33.23a.57.57,0,0,1-.57-.57V16.19a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57ZM48.65,47.4a.57.57,0,0,1-.57.57H41.95a.57.57,0,0,1-.57-.57V41.53a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H41.95a.57.57,0,0,1-.57-.57V33.08a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H41.95a.57.57,0,0,1-.57-.57V24.63a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Zm0-8.45a.57.57,0,0,1-.57.57H41.95a.57.57,0,0,1-.57-.57V16.19a.57.57,0,0,1,.57-.57h6.13a.57.57,0,0,1,.57.57Z"></path>
        </g>
        <g id="mouse">
            <path d="M28.73,27.18l9.68-9.68-.58-.58a15.11,15.11,0,0,0-20.41-1Z"></path><path d="M29.46,29.78h0L19,40.3l7.77,7.77A14.94,14.94,0,1,0,47.86,26.94l-7.77-7.77Z"></path><path d="M26.87,29,15.72,17.64a15.11,15.11,0,0,0,1,20.41l.58.58Z"></path>
        </g>
        <g id="terminal">
            <path d="M30.36,26.82,18,17.47a3.69,3.69,0,0,0-2.26-.74,3.89,3.89,0,0,0-3.83,3.83,3.94,3.94,0,0,0,1.58,3.1L22,29.92l-8.47,6.25a4,4,0,0,0-1.6,3.12,3.89,3.89,0,0,0,3.83,3.83A3.69,3.69,0,0,0,18,42.38l12.28-9.32,0,0a3.79,3.79,0,0,0,0-6.2Z"></path><path d="M48.39,40.76H31.89a3.45,3.45,0,1,0,0,6.87h16.5a3.45,3.45,0,1,0,0-6.87Z"></path>
        </g>
        </defs>
    </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);