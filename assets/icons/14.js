import * as React from 'react';
import Svg, { Circle, Rect, G, Path} from 'react-native-svg';

export default function SvgHome(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="21.66" height="18.332" viewBox="0 0 21.66 18.332">
        <G id="_14" data-name="14" transform="translate(-9 -8.6)">
          <G id="Group_28" data-name="Group 28" transform="translate(9 8.6)">
            <Path id="Path_15" data-name="Path 15" d="M9,17.687h2.906v9.245h5.811V20.064h4.226v6.868h5.811V17.687H30.66L19.83,8.6Z" transform="translate(-9 -8.6)" fill={props}/>
          </G>
        </G>
      </Svg>
    );
}