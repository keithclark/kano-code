const iss = {
    partType: 'data',
    type: 'iss',
    label: Kano.MakeApps.Msg.PART_DATA_ISS_NAME,
    image: '/assets/part/iss.svg',
    colour: '#1f1f1f',
    parameters: [],
    refreshFreq: 5,
    minRefreshFreq: 5,
    singleton: true,
    method: 'space.getISSStatus',
    dataKeys: [{
        label: Kano.MakeApps.Msg.PART_DATA_ISS_LATITUDE_TITLE,
        key: 'latitude',
        description: Kano.MakeApps.Msg.PART_DATA_ISS_LATITUDE_DESC,
    },{
        label: Kano.MakeApps.Msg.PART_DATA_ISS_LONGITUDE_TITLE,
        key: 'longitude',
        description: Kano.MakeApps.Msg.PART_DATA_ISS_LONGITUDE_DESC,
    }],
};

export default iss;