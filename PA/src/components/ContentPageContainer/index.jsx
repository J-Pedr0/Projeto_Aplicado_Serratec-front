import { React } from 'react';
import {ContentContainerStyle} from './Content';

function ContentPageContainer(props) {
return(
<ContentContainerStyle>
{props.children}
</ContentContainerStyle>
);
}

export default ContentPageContainer;