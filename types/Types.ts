export type NavigationTypes = {
  navigation: any;
};

export type ImagesType = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export type HeaderType = {
  name: string;
  from?:string
}

export type TrendingHashTagsType = {
  images: ImagesType[];
  from: string;
  loading?: boolean;
};

export type NodeImageType = {
  url: string;
};

export type SkeletonType = {
  from: string;
};