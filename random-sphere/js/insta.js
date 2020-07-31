// populate child elements with images from insta

AFRAME.registerComponent("insta", {

    schema: {
        // this won't work due to CORS, use a locally cached copy instead
        url: { default: 'https://www.instagram.com/explore/tags/hfggmuend/?__a=1' }
    },

    async init() {

        let el = this.el;
        let urls = await this.getImageURLs();
        
        setTimeout(function () {
            let posters = Array.from(el.children);
            console.log(posters);
            let imax = urls.length;
            posters.forEach( (poster, i) => {
                poster.setAttribute('material', { src: urls[i % imax] }) ;
            });
        });

    },

    async getImageURLs() {   
        let insta = await fetch(this.data.url);
        let json = await insta.json();
        let items = json.graphql.hashtag.edge_hashtag_to_media.edges;
        let urls = items.map( item => item.node.thumbnail_resources[4].src );
        return urls;
    }

});