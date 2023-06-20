import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import GiantTitle from '../../../Components/GiantTitle';
import ChampionDifficultyRanking from '../../../enums/championDifficultyRanking';
import ChampionRole from '../../../enums/championRole';
import routes from '../../../routes';
import { Champion } from '../../../types';
import getChampionLargeImageLink from '../../../utils/getChampionLargeImageLink';
import getRoleSvgIcon from '../../../utils/getRoleSvgIcon';
import levelToRanking, {
  CHAMPION_DIFFICULTIES,
} from '../../../utils/levelToRanking';
import {
  BackgroundAsset,
  BackgroundImage,
  ChampionsButton,
  ChampionsButtonContainer,
  ChampionsButtonIcon,
  ChampionsButtonText,
  Container,
  ContainerDifficultyIcon,
  Desc,
  Dock,
  EndLine,
  ForegroundAsset,
  Info,
  InfoDivider,
  ItemDifficultyIcon,
  MainImage,
  Name,
  OverviewSection,
  SectionInner,
  Specs,
  SpecsItem,
  SpecsItemIcon,
  SpecsItemType,
  SpecsItemValue,
  SpecsList,
  StartLine,
  Text,
  WrapBackgroundImage,
  WrapDifficultyIcon,
} from './style';

type DifficultyIconProps = {
  difficulty: ChampionDifficultyRanking;
};

const DifficultyIcon = ({ difficulty }: DifficultyIconProps) => {
  let itemClasses: string[] = [];

  if (difficulty === 'low') {
    itemClasses = ['full', 'empty', 'empty'];
  } else if (difficulty === 'medium') {
    itemClasses = ['full', 'full', 'empty'];
  } else if (difficulty === 'high') {
    itemClasses = ['full', 'full', 'full'];
  }

  return (
    <WrapDifficultyIcon>
      <ContainerDifficultyIcon>
        {itemClasses.map((className, index) => (
          <ItemDifficultyIcon key={index} className={className} />
        ))}
      </ContainerDifficultyIcon>
    </WrapDifficultyIcon>
  );
};

type ChampionProps = {
  champion: Champion;
};

const Overview = ({ champion }: ChampionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const startLineRef = useRef<HTMLHeadingElement>(null);
  const endLineRef = useRef<HTMLHeadingElement>(null);
  const [showLore, setShowLore] = useState(false);
  const { t } = useTranslation();

  const seeMoreHandler = () => setShowLore(true);
  const { name, title, lore, blurb, info, tags, id } = champion;
  const difficulty = levelToRanking(info.difficulty);
  const role = tags[0];
  const SvgIcon = getRoleSvgIcon(role as ChampionRole);

  useEffect(() => {
    const resizeHandler = () => {
      const containerElement = containerRef.current;
      const headerElement = nameRef.current;
      const lineLeftElement = startLineRef.current;
      const lineRightElement = endLineRef.current;

      if (
        containerElement &&
        headerElement &&
        lineLeftElement &&
        lineRightElement
      ) {
        const containerCoords = containerElement.getBoundingClientRect();
        const headerCoords = headerElement.getBoundingClientRect();

        const newDistanceLeft = Math.floor(
          (containerCoords.width - headerCoords.width) / 2
        );
        const newDistanceRight = Math.floor(
          (containerCoords.width + headerCoords.width) / 2
        );

        lineLeftElement.style.width = `${newDistanceLeft}px`;
        lineRightElement.style.left = `${newDistanceRight}px`;
      }
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <OverviewSection>
      <BackgroundAsset>
        <WrapBackgroundImage>
          <BackgroundImage src={getChampionLargeImageLink(id)} />
        </WrapBackgroundImage>
      </BackgroundAsset>
      <SectionInner>
        <ForegroundAsset>
          <MainImage src={getChampionLargeImageLink(id)} />
        </ForegroundAsset>
        <Dock>
          <Container ref={containerRef} />
          <StartLine ref={startLineRef} />
          <EndLine ref={endLineRef} />
          <Name>
            <GiantTitle
              titleRef={nameRef}
              text={`${title ? `${title}\n` : ''}${name}`}
              toggleContrast
              transitionDelay={500}
            />
          </Name>
          <Info>
            <Specs>
              <SpecsList>
                <SpecsItem>
                  <SpecsItemIcon>
                    <SvgIcon />
                  </SpecsItemIcon>
                  <SpecsItemType>Role</SpecsItemType>
                  <SpecsItemValue>{role}</SpecsItemValue>
                </SpecsItem>

                <SpecsItem>
                  <SpecsItemIcon>
                    <DifficultyIcon difficulty={difficulty} />
                  </SpecsItemIcon>
                  <SpecsItemType>Difficulty</SpecsItemType>
                  <SpecsItemValue>
                    {t(CHAMPION_DIFFICULTIES[difficulty])}
                  </SpecsItemValue>
                </SpecsItem>
              </SpecsList>
            </Specs>

            <InfoDivider></InfoDivider>

            <Desc>
              <Text>
                {showLore ? lore : blurb}
                {'\n'}
                {lore.length > blurb.length && !showLore && (
                  <button onClick={seeMoreHandler}>See more</button>
                )}
              </Text>
            </Desc>
          </Info>
        </Dock>
      </SectionInner>

      <ChampionsButtonContainer>
        <ChampionsButton as={Link} to={routes.championListPagePath()}>
          <ChampionsButtonText>Champions List</ChampionsButtonText>
          <ChampionsButtonIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 15"
          >
            <path d="M12.8 8.4V4.8S13 1.1 7 0h-.1c-6 1.1-5.8 4.8-5.8 4.8v3.6c0 1.9-.8 2.5-.8 2.5C1.5 15.3 4.5 15 4.5 15c-1.6-2.1 0-5.8 0-5.8-2.3-.3-1.9-2.7-1.7-3.4 0 0 2.2-.1 3.3 1.6v4.2l.9.9.8-.8V7.5c1.2-1.8 3.3-1.7 3.3-1.6.2.7.6 3.1-1.7 3.3 0 0 1.6 3.8 0 5.8 0 0 3 .3 4.2-4.1.1 0-.8-.6-.8-2.5z"></path>
          </ChampionsButtonIcon>
        </ChampionsButton>
      </ChampionsButtonContainer>
    </OverviewSection>
  );
};

export default Overview;
