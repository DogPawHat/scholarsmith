export default function (pager, topics, pages) {
    const clickNumber = (e) => {
        let value = parseInt(e.target.text) - 1;
        pages.removeClass("current");
        pager.children().removeClass("current");
        pager.eq(value).addClass("current");
        topics.eq(value).children("h2.page").addClass("current");
    };

    const clickLeftArrow = () => {
        let current = pages.filter(".current");
        let currentIndex = pages.index(current);
        if (currentIndex > 0) {
            let prev = pages.eq(currentIndex - 1);
            current.removeClass("current");
            next.addClass("current");
        }
    };

    const clickRightArrow = () => {
        let current = pages.filter(".current");
        let currentIndex = pages.index(current);
        if (currentIndex < pages.length) {
            let next = pages.eq(pages.index(current) + 1);
            current.removeClass("current");
            next.addClass("current");
        }
    };

    let arrows = pager.children(".arrow");
    arrows.eq(0).click(clickLeftArrow);
    arrows.eq(1).click(clickRightArrow);
    pager.children("li:not(.arrow)").click(clickNumber);
}