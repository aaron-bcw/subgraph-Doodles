import {
  Doodles as DoodlesContract,
  Transfer as TransferEvent
} from "../generated/Doodles/Doodles"
import {
  Doodle,
  User
} from "../generated/schema"


export function handleTransfer(event: TransferEvent): void {
  let doodle = Doodle.load(event.params.tokenId.toString())
  if (!doodle) {
    doodle = new Doodle(event.params.tokenId.toString())
    doodle.creator = event.params.to.toHexString();
    doodle.createdAtTimestamp = event.block.timestamp;

    let doodleContract = DoodlesContract.bind(event.address);
    doodle.contentURI = doodleContract.tokenURI(event.params.tokenId);
  }

  doodle.owner = event.params.to.toHexString();
  doodle.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}
