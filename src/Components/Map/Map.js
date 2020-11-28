import React from 'react'
import { ResponsiveGeoMapCanvas } from '@nivo/geo'
import * as d3 from 'd3'

const MyResponsiveGeoMapCanvas = () => (
	<ResponsiveGeoMapCanvas
		features='/* please have a look at the description for usage */'
		margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
		projectionTranslation={[0.5, 0.5]}
		projectionRotation={[0, 0, 0]}
		fillColor='#eeeeee'
		borderWidth={0.5}
		borderColor='#043e18'
		enableGraticule={true}
		graticuleLineColor='#15e595'
	/>
);

export default MyResponsiveGeoMapCanvas