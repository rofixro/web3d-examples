import { LineSegments2 } from '../../jsm/lines/LineSegments2.js';
import { LineGeometry } from '../../jsm/lines/LineGeometry.js';
import { LineMaterial } from '../../jsm/lines/LineMaterial.js';

class Line2 extends LineSegments2 {

	constructor( geometry = new LineGeometry(), material = new LineMaterial( { color: Math.random() * 0xffffff } ) ) {

		super( geometry, material );

		this.isLine2 = true;

		this.type = 'Line2';

	}

}

export { Line2 };
