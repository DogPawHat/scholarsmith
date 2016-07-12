export default function(pager, topics, pages){
    const clickNumber = (e) => {
        let value = e.target.value;
        pages.removeClass("current");
        pager.children().removeClass("current");
        pager.eq(value).addClass("current");
        topics.eq(value).addClass("current");
    }

    const clickLeftArrow = () => {
        let current = pages.find(".current");
        current.removeClass("current");
        pager.children().removeClass("current");
        current.prev
    }

    const clickRightArrow = () => {

    }

    let arrows = pager.children(".arrow")
    arrows.eq(0).click(clickLeftArrow);
    arrows.eq(1).click(clickRightArrow);
    pager.children(":not(.arrow)").click(clickNumber);
}