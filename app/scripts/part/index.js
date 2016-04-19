import Part from './part';
import UI from './ui';
import Data from './data';
import Button from './button';
import Frame from './frame';
import TextInput from './text-input';
import Text from './text';
import Map from './map';
import ISS from './data/space/iss';
import Weather from './data/weather/weather';
import Share from './data/kano/share';
import Image from './image';

let part,
    partTypes;

export default part = [Button, Frame, TextInput, Text, Map, ISS, Weather, Share, Image];


partTypes = {
    'ui': UI,
    'data': Data
};

window.Part = {
    create (model, size) {
        console.log(model.partType);
        return new partTypes[model.partType](model, size);
    },
    clear () {
        return Part.clear();
    }
};
