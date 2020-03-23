interface Nav {
  title: string,
  href: string
}

export function createNav(): Nav[] {
  return [
    { title: '首页', href: '/' },
    { title: '文章', href: '/article' },
    { title: '历程', href: '/course' },
    { title: '留言', href: '/message' },
    { title: '分享', href: '/share' }
  ]
}

export function getBase64Image(img: HTMLImageElement): string {
  let canvas: HTMLCanvasElement = document.createElement("canvas") 
  canvas.width = img.width 
  canvas.height = img.height 
  let ctx: any = canvas.getContext("2d") 
  ctx.drawImage(img, 0, 0, img.width, img.height) 
  let ext: string = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase() 
  let dataURL: string = canvas.toDataURL("image/"+ ext, 0-1) // (0-1　　　　表示图片的质量)
  return dataURL;
}  

export function emailReg(str: string): boolean {
  let reg: RegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  return reg.test(str)
}

export default {
  navs: createNav,
  getBase64Image,
  emailReg
}