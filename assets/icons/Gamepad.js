import * as React from 'react';
import Svg, { Circle, Rect, G, Path} from 'react-native-svg';

export default function SvgGamepad(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="34.995" height="17.5" viewBox="0 0 34.995 17.5">
            <Path id="Icon_awesome-gamepad" data-name="Icon awesome-gamepad" d="M26.25,5.25H8.75A8.75,8.75,0,1,0,15,20.125h5A8.749,8.749,0,1,0,26.25,5.25ZM14,15.094a.658.658,0,0,1-.656.656H10.5v2.844a.658.658,0,0,1-.656.656H7.656A.658.658,0,0,1,7,18.594V15.75H4.156a.658.658,0,0,1-.656-.656V12.906a.658.658,0,0,1,.656-.656H7V9.406a.658.658,0,0,1,.656-.656H9.844a.658.658,0,0,1,.656.656V12.25h2.844a.658.658,0,0,1,.656.656Zm10.063,3.719a2.625,2.625,0,1,1,2.625-2.625A2.626,2.626,0,0,1,24.063,18.813Zm4.375-4.375a2.625,2.625,0,1,1,2.625-2.625A2.626,2.626,0,0,1,28.438,14.438Z" transform="translate(0 -5.25)" fill={props}/>
        </Svg>
    );
}