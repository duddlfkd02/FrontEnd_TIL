/**
 Pick<T, K>
 : 뽑다, 고르다
 -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends "title" | "tags" | "content" | "thumbnailURL"
  // "title" | "content" extends "title" | "tags" | "content" | "thumbnailURL"
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "오래된 글",
  content: "오래된 콘텐츠",
};

/**
 Omit<T, K>
 : 생략하다, 빼다.
 -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">
// Pick<Post, Exclude<"title" |  "tags" | "content" |"thumbnailURL", "title">
// Pick<Post, "tags" | "content" |"thumbnailURL">

const noTitlePost: Omit<Post, "title"> = {
  tags: [""],
  content: "제목 없는 글",
  thumbnailURL: "http://...",
};

/**
 Record<K, V>
 */

type LegacyThumbnail = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
