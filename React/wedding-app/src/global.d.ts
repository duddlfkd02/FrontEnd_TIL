// *TypeScript에 .module.scss 파일이 객체처럼 쓰일 수 있음을 명시
// *styles 변수를 import styles from "./Section.module.scss"; 처럼 쓸 수 있도록 도움
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
