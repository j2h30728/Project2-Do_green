interface ILinkType {
  mypageTab: string;
}
interface IProgressbarType {
  wrapper: string;
  filledbar: string;
  unfilledbar: string;
}
interface IImageType {
  profileImg: string;
  progressbarImg: string;
}

interface ITextType {
  messageText: string;
}
export const LinkType: ILinkType = {
  mypageTab: 'mb-12 pl-8',
};
export const ProgressbarType: IProgressbarType = {
  wrapper: 'mt-12 mb-24 mx-auto px-10 lg:px-20',
  filledbar: 'inline-block h-8 rounded-tl-md rounded-bl-md bg-garden1',
  unfilledbar: 'inline-block h-8 rounded-tr-md rounded-br-md bg-slate-100',
};
export const ImageType: IImageType = {
  profileImg: 'w-24 h-24 rounded-full m-2 p-2 bg-slate-100',
  progressbarImg: 'w-20 h-20 float-right rounded-full text-center',
};
export const TextType: ITextType = {
  messageText: 'text-emerald-600',
};
