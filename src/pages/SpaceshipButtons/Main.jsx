import Pen from '../../components/Pen';
import Caption from '../../components/Caption';
import { SN1, SN2, SN3 } from './Nav';

export default function Main() {
  return (
    <div className="panel-container">
      <Pen id="spaceship-buttons" title="Spaceship buttons">
        <SN1 />
        <SN2 />
        <SN3 />
      </Pen>
      <Caption>
        Using pseudo-elements to simulate a gliding border.
      </Caption>
    </div>
  );
}
