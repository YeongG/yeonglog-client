import { FC, useMemo } from "react";
import styled from "styled-components";
import PostListItem from "@components/PostListItem";

interface Props {}

const staticData = [
  {
    id: 1,
    category: "생각",
    title: "개발자 부업, 어디까지 해봤니?",
    subTitle: "어떤 개발자의 20년 부업 역사",
    writeData: "April 6, 2021",
    backgroundImgSrc:
      "https://taegon.kim/wp-content/uploads/2019/03/conceptual-creativity-cube-327186.jpg",
  },
  {
    id: 2,
    category: "기술팁",
    title: "Husky 사용할 때 주의!",
    subTitle: "5 버전 릴리스와 라이선스 정책 변경",
    writeData: "February 13, 2021",
    backgroundImgSrc:
      "https://taegon.kim/wp-content/uploads/2020/07/recoil-recipes-2.jpg",
  },
  {
    id: 4,
    category: "회고",
    title: "나의 인생 회고3",
    subTitle: "나의 미래 생각해보기",
    writeData: "February 13, 2021",
    backgroundImgSrc:
      "https://taegon.kim/wp-content/uploads/2021/02/lukasz-juszczak-3UFqqOhGBuE-unsplash.jpg",
  },
  {
    id: 3,
    category: "기술팁",
    title: "Recoil 레시피: 서버 사이드 렌더링",
    subTitle: "촉촉하게 상태 공급 해주는 방법",
    writeData: "February 13, 2021",
    backgroundImgSrc:
      "https://taegon.kim/wp-content/uploads/2021/04/pexels-olia-danilevich-5466811.jpg",
  },
  {
    id: 5,
    category: "회고",
    title: "나의 인생 회고2",
    subTitle: "나의 회새생활 생각해보기",
    writeData: "February 13, 2021",
    backgroundImgSrc:
      "https://taegon.kim/wp-content/uploads/2021/02/lukasz-juszczak-3UFqqOhGBuE-unsplash.jpg",
  },
  {
    id: 6,
    category: "회고",
    title: "나의 인생 회고1",
    subTitle: "나의 학교생활 돌아보기",
    writeData: "February 13, 2021",
    backgroundImgSrc:
      "https://taegon.kim/wp-content/uploads/2021/02/lukasz-juszczak-3UFqqOhGBuE-unsplash.jpg",
  },
];

const IndexPage: FC<Props> = () => {
  const statics = useMemo(() => {
    const attachmentMaps: {
      [key: string]: number;
    } = {};

    staticData.forEach(({ backgroundImgSrc }) => {
      attachmentMaps[backgroundImgSrc] =
        (attachmentMaps[backgroundImgSrc] ?? 0) + 1;
    });

    return staticData.map((data, idx: number) => (
      <PostListItem
        {...data}
        key={idx}
        attachment={attachmentMaps[data.backgroundImgSrc] > 1}
        isTop={idx === 0}
      />
    ));
  }, [staticData]);

  return <Container>{statics}</Container>;
};

const Container = styled.div``;

export default IndexPage;
