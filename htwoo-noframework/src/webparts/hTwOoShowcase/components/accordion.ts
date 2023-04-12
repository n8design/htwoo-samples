export default class HooAccordion {

    public static item = (header?: any, content?: any) => {

        console.debug(header, content)

        return `
            <details class="hoo-accordion">
                <summary class="hoo-accordion-header">
                    <div class="hoo-accordion-summary">
                        <span class="hoo-icon">
                            <svg class="hoo-icon-svg icon-arrow-right" aria-hidden="true" viewBox="0 0 32 32">
                                <path d="M8.047 30.547l14.531-14.547-14.531-14.547 1.406-1.406 15.969 15.953-15.969 15.953-1.406-1.406z"></path>
                            </svg>
                        </span>
                        <h3>${ header || "Lorem ipsum dolor sit." }</h3>
                    </div>
                </summary>
                <div class="hoo-accordion-content">
                    ${ content || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique delectus facilis, quae aspernatur ipsam eveniet commodi assumenda ipsa iure dolorem quidem enim illum perferendis amet nam suscipit unde dicta reiciendis eligendi ratione dignissimos? Aperiam hic vel quis ex consequuntur, possimus magnam rerum in officiis fugit non inventore voluptas earum minima iure! Et, eaque repellendus cumque optio nam odit. Voluptatibus nulla facere atque iusto veniam, explicabo voluptatum maxime praesentium quasi corrupti quia? Unde tempore officia esse deserunt praesentium ipsum accusantium hic expedita aliquid harum nobis doloribus necessitatibus cum facilis, temporibus laudantium rem quo tempora eius maiores ab veritatis. Unde, ex!'}
                </div>
            </details>`
    }

}