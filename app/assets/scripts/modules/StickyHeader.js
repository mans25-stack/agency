import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
    constructor(){
        this.siteHeader = $(".site-header");
        this.headerTrigger = $(".large-hero__title");
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createHeaderWaypoint();   
        this.createPageSectionWaypoints(); 
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint(){
        var that = this;
        new Waypoint({
            // for pointing to native dom element
            element: this.headerTrigger[0],
            handler: function(direction){
                if (direction == 'down') {
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    createPageSectionWaypoints(){
        var that = this;
        this.pageSections.each(function(){
            var currentPageSection = this;
            new Waypoint({
                element:currentPageSection,
                handler: function(direction){
                    if (direction == "down"){
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                        }    
                  },
                  offset: "25%"
            });

              new Waypoint({
                element:currentPageSection,
                handler: function(direction){
                    if (direction == "up"){
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                        }    
                  },
                  offset: "-35%"
            });
        });
    }

}


export default StickyHeader;