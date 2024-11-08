import { gear102, gear107, gear72 } from "../../assets"
import { SmallGearRound } from "../BoxRound"
import { TreeGears, TreeGears1 } from "../Gears"

const GearBox = ({ flag, content }) => (
  <section className="pendingSquare sectionWrapper section1" style={{ position: 'relative', marginBottom: flag && 0 }}>
    <div className="gearShow">
      <TreeGears img1={gear102} img2={gear107} img3={gear72} />
    </div>
    <div className="gearHidden">
      <SmallGearRound right={-1} top={-1} />
    </div>
    {content}
  </section>
)

const LeftGearBox = ({ flag, content }) => (
  <section className="pendingSquare sectionWrapper section1" style={{ position: 'relative', marginBottom: flag && 0 }}>
    <div className="gearShow">
      <TreeGears1 img1={gear102} img2={gear107} img3={gear72} />
    </div>
    <div className="gearHidden">
      <SmallGearRound left={-1} top={-1} rotate='-90deg' />
    </div>
    {content}
  </section>
)

export { GearBox, LeftGearBox }