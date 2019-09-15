export default class ScrollTable {
  constructor(scrollContainer, contentContainer, data, rowHeight, showCount = 10) {
    this.scrollContainer = scrollContainer
    this.contentContainer = contentContainer
    this.rowHeight = rowHeight
    this.data = data
    this.showCount = showCount
    this.oldSrcollTop = 0
    this.scrollTop = 0
    this.scrollEvent = this.scrollEvent.bind(this)
    scrollContainer.addEventListener('scroll', this.scrollEvent)
  }

  scrollEvent() {
    this.setScrollBar()
    this.setData()
  }

  setScrollBar() {
    const contentContainerStyle = this.contentContainer.style
    let scrollTop = this.scrollContainer.scrollTop
    let marginBottom = (this.data.length - this.showCount) * this.rowHeight - scrollTop
    if (marginBottom < 0) {
      marginBottom = 0
      scrollTop = (this.data.length - this.showCount) * this.rowHeight
    }
    contentContainerStyle.marginTop = `${scrollTop}px`
    contentContainerStyle.marginBottom = `${marginBottom}px`
  }

  setData() {

  }

  destroy() {
    this.scrollContainer.removeEventListener('scroll', this.scrollEvent)
    const contentContainerStyle = this.contentContainer.style
    contentContainerStyle.marginTop = '0px'
    contentContainerStyle.marginBottom = '0px'
  }
}