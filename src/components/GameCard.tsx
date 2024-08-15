import PlatformIconsList from "./PlatformIconsList";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/get-images";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Image src={getCroppedImageUrl(game.background_image)} />
    <CardBody>
      <HStack justifyContent="space-between" marginBottom={3}>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
      <Heading fontSize="2xl">
        {game.name}
        <Emoji rating={game.rating_top} />
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;
