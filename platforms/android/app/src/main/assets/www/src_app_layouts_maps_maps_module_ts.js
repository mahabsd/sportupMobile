(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_maps_maps_module_ts"],{

/***/ 47817:
/*!************************************************************************!*\
  !*** ./node_modules/@googlemaps/markerclustererplus/dist/index.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkerClusterer)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend(type1, type2) {
    // eslint-disable-next-line prefer-const
    for (var property in type2.prototype) {
        type1.prototype[property] = type2.prototype[property];
    }
}
/**
 * @ignore
 */
var OverlayViewSafe = /** @class */ (function () {
    function OverlayViewSafe() {
        // MarkerClusterer implements google.maps.OverlayView interface. We use the
        // extend function to extend MarkerClusterer with google.maps.OverlayView
        // because it might not always be available when the code is defined so we
        // look for it at the last possible moment. If it doesn't exist now then
        // there is no point going ahead :)
        extend(OverlayViewSafe, google.maps.OverlayView);
    }
    return OverlayViewSafe;
}());

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @hidden
 */
function toCssText(styles) {
    return Object.keys(styles)
        .reduce(function (acc, key) {
        if (styles[key]) {
            acc.push(key + ":" + styles[key]);
        }
        return acc;
    }, [])
        .join(";");
}
/**
 *
 * @hidden
 */
function coercePixels(pixels) {
    return pixels ? pixels + "px" : undefined;
}
/**
 * A cluster icon.
 */
var ClusterIcon = /** @class */ (function (_super) {
    __extends(ClusterIcon, _super);
    /**
     * @param cluster_ The cluster with which the icon is to be associated.
     * @param styles_ An array of {@link ClusterIconStyle} defining the cluster icons
     *  to use for various cluster sizes.
     */
    function ClusterIcon(cluster_, styles_) {
        var _this = _super.call(this) || this;
        _this.cluster_ = cluster_;
        _this.styles_ = styles_;
        _this.center_ = null;
        _this.div_ = null;
        _this.sums_ = null;
        _this.visible_ = false;
        _this.style = null;
        _this.setMap(cluster_.getMap()); // Note: this causes onAdd to be called
        return _this;
    }
    /**
     * Adds the icon to the DOM.
     */
    ClusterIcon.prototype.onAdd = function () {
        var _this = this;
        var cMouseDownInCluster;
        var cDraggingMapByCluster;
        var mc = this.cluster_.getMarkerClusterer();
        var _a = google.maps.version.split("."), major = _a[0], minor = _a[1];
        var gmVersion = parseInt(major, 10) * 100 + parseInt(minor, 10);
        this.div_ = document.createElement("div");
        if (this.visible_) {
            this.show();
        }
        this.getPanes().overlayMouseTarget.appendChild(this.div_);
        // Fix for Issue 157
        this.boundsChangedListener_ = google.maps.event.addListener(this.getMap(), "bounds_changed", function () {
            cDraggingMapByCluster = cMouseDownInCluster;
        });
        google.maps.event.addDomListener(this.div_, "mousedown", function () {
            cMouseDownInCluster = true;
            cDraggingMapByCluster = false;
        });
        google.maps.event.addDomListener(this.div_, "contextmenu", function () {
            /**
             * This event is fired when a cluster marker contextmenu is requested.
             * @name MarkerClusterer#mouseover
             * @param {Cluster} c The cluster that the contextmenu is requested.
             * @event
             */
            google.maps.event.trigger(mc, "contextmenu", _this.cluster_);
        });
        // March 1, 2018: Fix for this 3.32 exp bug, https://issuetracker.google.com/issues/73571522
        // But it doesn't work with earlier releases so do a version check.
        if (gmVersion >= 332) {
            // Ugly version-dependent code
            google.maps.event.addDomListener(this.div_, "touchstart", function (e) {
                e.stopPropagation();
            });
        }
        google.maps.event.addDomListener(this.div_, "click", function (e) {
            cMouseDownInCluster = false;
            if (!cDraggingMapByCluster) {
                /**
                 * This event is fired when a cluster marker is clicked.
                 * @name MarkerClusterer#click
                 * @param {Cluster} c The cluster that was clicked.
                 * @event
                 */
                google.maps.event.trigger(mc, "click", _this.cluster_);
                google.maps.event.trigger(mc, "clusterclick", _this.cluster_); // deprecated name
                // The default click handler follows. Disable it by setting
                // the zoomOnClick property to false.
                if (mc.getZoomOnClick()) {
                    // Zoom into the cluster.
                    var mz_1 = mc.getMaxZoom();
                    var theBounds_1 = _this.cluster_.getBounds();
                    mc.getMap().fitBounds(theBounds_1);
                    // There is a fix for Issue 170 here:
                    setTimeout(function () {
                        mc.getMap().fitBounds(theBounds_1);
                        // Don't zoom beyond the max zoom level
                        if (mz_1 !== null && mc.getMap().getZoom() > mz_1) {
                            mc.getMap().setZoom(mz_1 + 1);
                        }
                    }, 100);
                }
                // Prevent event propagation to the map:
                e.cancelBubble = true;
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
            }
        });
        google.maps.event.addDomListener(this.div_, "mouseover", function () {
            /**
             * This event is fired when the mouse moves over a cluster marker.
             * @name MarkerClusterer#mouseover
             * @param {Cluster} c The cluster that the mouse moved over.
             * @event
             */
            google.maps.event.trigger(mc, "mouseover", _this.cluster_);
        });
        google.maps.event.addDomListener(this.div_, "mouseout", function () {
            /**
             * This event is fired when the mouse moves out of a cluster marker.
             * @name MarkerClusterer#mouseout
             * @param {Cluster} c The cluster that the mouse moved out of.
             * @event
             */
            google.maps.event.trigger(mc, "mouseout", _this.cluster_);
        });
    };
    /**
     * Removes the icon from the DOM.
     */
    ClusterIcon.prototype.onRemove = function () {
        if (this.div_ && this.div_.parentNode) {
            this.hide();
            google.maps.event.removeListener(this.boundsChangedListener_);
            google.maps.event.clearInstanceListeners(this.div_);
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        }
    };
    /**
     * Draws the icon.
     */
    ClusterIcon.prototype.draw = function () {
        if (this.visible_) {
            var pos = this.getPosFromLatLng_(this.center_);
            this.div_.style.top = pos.y + "px";
            this.div_.style.left = pos.x + "px";
        }
    };
    /**
     * Hides the icon.
     */
    ClusterIcon.prototype.hide = function () {
        if (this.div_) {
            this.div_.style.display = "none";
        }
        this.visible_ = false;
    };
    /**
     * Positions and shows the icon.
     */
    ClusterIcon.prototype.show = function () {
        if (this.div_) {
            this.div_.className = this.className_;
            this.div_.style.cssText = this.createCss_(this.getPosFromLatLng_(this.center_));
            this.div_.innerHTML =
                (this.style.url ? this.getImageElementHtml() : "") +
                    this.getLabelDivHtml();
            if (typeof this.sums_.title === "undefined" || this.sums_.title === "") {
                this.div_.title = this.cluster_.getMarkerClusterer().getTitle();
            }
            else {
                this.div_.title = this.sums_.title;
            }
            this.div_.style.display = "";
        }
        this.visible_ = true;
    };
    ClusterIcon.prototype.getLabelDivHtml = function () {
        var mc = this.cluster_.getMarkerClusterer();
        var ariaLabel = mc.ariaLabelFn(this.sums_.text);
        var divStyle = {
            position: "absolute",
            top: coercePixels(this.anchorText_[0]),
            left: coercePixels(this.anchorText_[1]),
            color: this.style.textColor,
            "font-size": coercePixels(this.style.textSize),
            "font-family": this.style.fontFamily,
            "font-weight": this.style.fontWeight,
            "font-style": this.style.fontStyle,
            "text-decoration": this.style.textDecoration,
            "text-align": "center",
            width: coercePixels(this.style.width),
            "line-height": coercePixels(this.style.textLineHeight)
        };
        return "\n<div aria-label=\"".concat(ariaLabel, "\" style=\"").concat(toCssText(divStyle), "\" tabindex=\"0\">\n  <span aria-hidden=\"true\">").concat(this.sums_.text, "</span>\n</div>\n");
    };
    ClusterIcon.prototype.getImageElementHtml = function () {
        // NOTE: values must be specified in px units
        var bp = (this.style.backgroundPosition || "0 0").split(" ");
        var spriteH = parseInt(bp[0].replace(/^\s+|\s+$/g, ""), 10);
        var spriteV = parseInt(bp[1].replace(/^\s+|\s+$/g, ""), 10);
        var dimensions = {};
        if (this.cluster_.getMarkerClusterer().getEnableRetinaIcons()) {
            dimensions = {
                width: coercePixels(this.style.width),
                height: coercePixels(this.style.height)
            };
        }
        else {
            var _a = [
                -1 * spriteV,
                -1 * spriteH + this.style.width,
                -1 * spriteV + this.style.height,
                -1 * spriteH,
            ], Y1 = _a[0], X1 = _a[1], Y2 = _a[2], X2 = _a[3];
            dimensions = {
                clip: "rect(".concat(Y1, "px, ").concat(X1, "px, ").concat(Y2, "px, ").concat(X2, "px)")
            };
        }
        var overrideDimensionsDynamicIcon = this.sums_.url
            ? { width: "100%", height: "100%" }
            : {};
        var cssText = toCssText(__assign(__assign({ position: "absolute", top: coercePixels(spriteV), left: coercePixels(spriteH) }, dimensions), overrideDimensionsDynamicIcon));
        return "<img alt=\"".concat(this.sums_.text, "\" aria-hidden=\"true\" src=\"").concat(this.style.url, "\" style=\"").concat(cssText, "\"/>");
    };
    /**
     * Sets the icon styles to the appropriate element in the styles array.
     *
     * @ignore
     * @param sums The icon label text and styles index.
     */
    ClusterIcon.prototype.useStyle = function (sums) {
        this.sums_ = sums;
        var index = Math.max(0, sums.index - 1);
        index = Math.min(this.styles_.length - 1, index);
        this.style = this.sums_.url
            ? __assign(__assign({}, this.styles_[index]), { url: this.sums_.url }) : this.styles_[index];
        this.anchorText_ = this.style.anchorText || [0, 0];
        this.anchorIcon_ = this.style.anchorIcon || [
            Math.floor(this.style.height / 2),
            Math.floor(this.style.width / 2),
        ];
        this.className_ =
            this.cluster_.getMarkerClusterer().getClusterClass() +
                " " +
                (this.style.className || "cluster-" + index);
    };
    /**
     * Sets the position at which to center the icon.
     *
     * @param center The latlng to set as the center.
     */
    ClusterIcon.prototype.setCenter = function (center) {
        this.center_ = center;
    };
    /**
     * Creates the `cssText` style parameter based on the position of the icon.
     *
     * @param pos The position of the icon.
     * @return The CSS style text.
     */
    ClusterIcon.prototype.createCss_ = function (pos) {
        return toCssText({
            "z-index": "".concat(this.cluster_.getMarkerClusterer().getZIndex()),
            top: coercePixels(pos.y),
            left: coercePixels(pos.x),
            width: coercePixels(this.style.width),
            height: coercePixels(this.style.height),
            cursor: "pointer",
            position: "absolute",
            "-webkit-user-select": "none",
            "-khtml-user-select": "none",
            "-moz-user-select": "none",
            "-o-user-select": "none",
            "user-select": "none"
        });
    };
    /**
     * Returns the position at which to place the DIV depending on the latlng.
     *
     * @param latlng The position in latlng.
     * @return The position in pixels.
     */
    ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
        var pos = this.getProjection().fromLatLngToDivPixel(latlng);
        pos.x = Math.floor(pos.x - this.anchorIcon_[1]);
        pos.y = Math.floor(pos.y - this.anchorIcon_[0]);
        return pos;
    };
    return ClusterIcon;
}(OverlayViewSafe));

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a single cluster that manages a group of proximate markers.
 *  Used internally, do not call this constructor directly.
 */
var Cluster = /** @class */ (function () {
    /**
     *
     * @param markerClusterer_ The `MarkerClusterer` object with which this
     *  cluster is associated.
     */
    function Cluster(markerClusterer_) {
        this.markerClusterer_ = markerClusterer_;
        this.map_ = this.markerClusterer_.getMap();
        this.minClusterSize_ = this.markerClusterer_.getMinimumClusterSize();
        this.averageCenter_ = this.markerClusterer_.getAverageCenter();
        this.markers_ = []; // TODO: type;
        this.center_ = null;
        this.bounds_ = null;
        this.clusterIcon_ = new ClusterIcon(this, this.markerClusterer_.getStyles());
    }
    /**
     * Returns the number of markers managed by the cluster. You can call this from
     * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
     *
     * @return The number of markers in the cluster.
     */
    Cluster.prototype.getSize = function () {
        return this.markers_.length;
    };
    /**
     * Returns the array of markers managed by the cluster. You can call this from
     * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
     *
     * @return The array of markers in the cluster.
     */
    Cluster.prototype.getMarkers = function () {
        return this.markers_;
    };
    /**
     * Returns the center of the cluster. You can call this from
     * a `click`, `mouseover`, or `mouseout` event handler
     * for the `MarkerClusterer` object.
     *
     * @return The center of the cluster.
     */
    Cluster.prototype.getCenter = function () {
        return this.center_;
    };
    /**
     * Returns the map with which the cluster is associated.
     *
     * @return The map.
     * @ignore
     */
    Cluster.prototype.getMap = function () {
        return this.map_;
    };
    /**
     * Returns the `MarkerClusterer` object with which the cluster is associated.
     *
     * @return The associated marker clusterer.
     * @ignore
     */
    Cluster.prototype.getMarkerClusterer = function () {
        return this.markerClusterer_;
    };
    /**
     * Returns the bounds of the cluster.
     *
     * @return the cluster bounds.
     * @ignore
     */
    Cluster.prototype.getBounds = function () {
        var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
        var markers = this.getMarkers();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        return bounds;
    };
    /**
     * Removes the cluster from the map.
     *
     * @ignore
     */
    Cluster.prototype.remove = function () {
        this.clusterIcon_.setMap(null);
        this.markers_ = [];
        delete this.markers_;
    };
    /**
     * Adds a marker to the cluster.
     *
     * @param marker The marker to be added.
     * @return True if the marker was added.
     * @ignore
     */
    Cluster.prototype.addMarker = function (marker) {
        if (this.isMarkerAlreadyAdded_(marker)) {
            return false;
        }
        if (!this.center_) {
            this.center_ = marker.getPosition();
            this.calculateBounds_();
        }
        else {
            if (this.averageCenter_) {
                var l = this.markers_.length + 1;
                var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
                var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
                this.center_ = new google.maps.LatLng(lat, lng);
                this.calculateBounds_();
            }
        }
        marker.isAdded = true;
        this.markers_.push(marker);
        var mCount = this.markers_.length;
        var mz = this.markerClusterer_.getMaxZoom();
        if (mz !== null && this.map_.getZoom() > mz) {
            // Zoomed in past max zoom, so show the marker.
            if (marker.getMap() !== this.map_) {
                marker.setMap(this.map_);
            }
        }
        else if (mCount < this.minClusterSize_) {
            // Min cluster size not reached so show the marker.
            if (marker.getMap() !== this.map_) {
                marker.setMap(this.map_);
            }
        }
        else if (mCount === this.minClusterSize_) {
            // Hide the markers that were showing.
            for (var i = 0; i < mCount; i++) {
                this.markers_[i].setMap(null);
            }
        }
        else {
            marker.setMap(null);
        }
        return true;
    };
    /**
     * Determines if a marker lies within the cluster's bounds.
     *
     * @param marker The marker to check.
     * @return True if the marker lies in the bounds.
     * @ignore
     */
    Cluster.prototype.isMarkerInClusterBounds = function (marker) {
        return this.bounds_.contains(marker.getPosition());
    };
    /**
     * Calculates the extended bounds of the cluster with the grid.
     */
    Cluster.prototype.calculateBounds_ = function () {
        var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
        this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
    };
    /**
     * Updates the cluster icon.
     */
    Cluster.prototype.updateIcon = function () {
        var mCount = this.markers_.length;
        var mz = this.markerClusterer_.getMaxZoom();
        if (mz !== null && this.map_.getZoom() > mz) {
            this.clusterIcon_.hide();
            return;
        }
        if (mCount < this.minClusterSize_) {
            // Min cluster size not yet reached.
            this.clusterIcon_.hide();
            return;
        }
        var numStyles = this.markerClusterer_.getStyles().length;
        var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
        this.clusterIcon_.setCenter(this.center_);
        this.clusterIcon_.useStyle(sums);
        this.clusterIcon_.show();
    };
    /**
     * Determines if a marker has already been added to the cluster.
     *
     * @param marker The marker to check.
     * @return True if the marker has already been added.
     */
    Cluster.prototype.isMarkerAlreadyAdded_ = function (marker) {
        if (this.markers_.indexOf) {
            return this.markers_.indexOf(marker) !== -1;
        }
        else {
            for (var i = 0; i < this.markers_.length; i++) {
                if (marker === this.markers_[i]) {
                    return true;
                }
            }
        }
        return false;
    };
    return Cluster;
}());

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @ignore
 */
var getOption = function (options, prop, def) {
    if (options[prop] !== undefined) {
        return options[prop];
    }
    else {
        return def;
    }
};
var MarkerClusterer = /** @class */ (function (_super) {
    __extends(MarkerClusterer, _super);
    /**
     * Creates a MarkerClusterer object with the options specified in {@link MarkerClustererOptions}.
     * @param map The Google map to attach to.
     * @param markers The markers to be added to the cluster.
     * @param options The optional parameters.
     */
    function MarkerClusterer(map, markers, options) {
        if (markers === void 0) { markers = []; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.markers_ = [];
        _this.clusters_ = [];
        _this.listeners_ = [];
        _this.activeMap_ = null;
        _this.ready_ = false;
        _this.ariaLabelFn = _this.options.ariaLabelFn || (function () { return ""; });
        _this.zIndex_ = _this.options.zIndex || Number(google.maps.Marker.MAX_ZINDEX) + 1;
        _this.gridSize_ = _this.options.gridSize || 60;
        _this.minClusterSize_ = _this.options.minimumClusterSize || 2;
        _this.maxZoom_ = _this.options.maxZoom || null;
        _this.styles_ = _this.options.styles || [];
        _this.title_ = _this.options.title || "";
        _this.zoomOnClick_ = getOption(_this.options, "zoomOnClick", true);
        _this.averageCenter_ = getOption(_this.options, "averageCenter", false);
        _this.ignoreHidden_ = getOption(_this.options, "ignoreHidden", false);
        _this.enableRetinaIcons_ = getOption(_this.options, "enableRetinaIcons", false);
        _this.imagePath_ = _this.options.imagePath || MarkerClusterer.IMAGE_PATH;
        _this.imageExtension_ = _this.options.imageExtension || MarkerClusterer.IMAGE_EXTENSION;
        _this.imageSizes_ = _this.options.imageSizes || MarkerClusterer.IMAGE_SIZES;
        _this.calculator_ = _this.options.calculator || MarkerClusterer.CALCULATOR;
        _this.batchSize_ = _this.options.batchSize || MarkerClusterer.BATCH_SIZE;
        _this.batchSizeIE_ = _this.options.batchSizeIE || MarkerClusterer.BATCH_SIZE_IE;
        _this.clusterClass_ = _this.options.clusterClass || "cluster";
        if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
            // Try to avoid IE timeout when processing a huge number of markers:
            _this.batchSize_ = _this.batchSizeIE_;
        }
        _this.setupStyles_();
        _this.addMarkers(markers, true);
        _this.setMap(map); // Note: this causes onAdd to be called
        return _this;
    }
    /**
     * Implementation of the onAdd interface method.
     * @ignore
     */
    MarkerClusterer.prototype.onAdd = function () {
        var _this = this;
        this.activeMap_ = this.getMap();
        this.ready_ = true;
        this.repaint();
        this.prevZoom_ = this.getMap().getZoom();
        // Add the map event listeners
        this.listeners_ = [
            google.maps.event.addListener(this.getMap(), "zoom_changed", function () {
                var map = _this.getMap(); // eslint-disable-line @typescript-eslint/no-explicit-any
                // Fix for bug #407
                // Determines map type and prevents illegal zoom levels
                var minZoom = map.minZoom || 0;
                var maxZoom = Math.min(map.maxZoom || 100, map.mapTypes[map.getMapTypeId()].maxZoom);
                var zoom = Math.min(Math.max(_this.getMap().getZoom(), minZoom), maxZoom);
                if (_this.prevZoom_ != zoom) {
                    _this.prevZoom_ = zoom;
                    _this.resetViewport_(false);
                }
            }),
            google.maps.event.addListener(this.getMap(), "idle", function () {
                _this.redraw_();
            }),
        ];
    };
    /**
     * Implementation of the onRemove interface method.
     * Removes map event listeners and all cluster icons from the DOM.
     * All managed markers are also put back on the map.
     * @ignore
     */
    MarkerClusterer.prototype.onRemove = function () {
        // Put all the managed markers back on the map:
        for (var i = 0; i < this.markers_.length; i++) {
            if (this.markers_[i].getMap() !== this.activeMap_) {
                this.markers_[i].setMap(this.activeMap_);
            }
        }
        // Remove all clusters:
        for (var i = 0; i < this.clusters_.length; i++) {
            this.clusters_[i].remove();
        }
        this.clusters_ = [];
        // Remove map event listeners:
        for (var i = 0; i < this.listeners_.length; i++) {
            google.maps.event.removeListener(this.listeners_[i]);
        }
        this.listeners_ = [];
        this.activeMap_ = null;
        this.ready_ = false;
    };
    /**
     * Implementation of the draw interface method.
     * @ignore
     */
    MarkerClusterer.prototype.draw = function () { };
    /**
     * Sets up the styles object.
     */
    MarkerClusterer.prototype.setupStyles_ = function () {
        if (this.styles_.length > 0) {
            return;
        }
        for (var i = 0; i < this.imageSizes_.length; i++) {
            var size = this.imageSizes_[i];
            this.styles_.push(MarkerClusterer.withDefaultStyle({
                url: this.imagePath_ + (i + 1) + "." + this.imageExtension_,
                height: size,
                width: size
            }));
        }
    };
    /**
     *  Fits the map to the bounds of the markers managed by the clusterer.
     */
    MarkerClusterer.prototype.fitMapToMarkers = function (padding) {
        var markers = this.getMarkers();
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            // March 3, 2018: Bug fix -- honor the ignoreHidden property
            if (markers[i].getVisible() || !this.getIgnoreHidden()) {
                bounds.extend(markers[i].getPosition());
            }
        }
        this.getMap().fitBounds(bounds, padding);
    };
    /**
     * Returns the value of the `gridSize` property.
     *
     * @return The grid size.
     */
    MarkerClusterer.prototype.getGridSize = function () {
        return this.gridSize_;
    };
    /**
     * Sets the value of the `gridSize` property.
     *
     * @param gridSize The grid size.
     */
    MarkerClusterer.prototype.setGridSize = function (gridSize) {
        this.gridSize_ = gridSize;
    };
    /**
     * Returns the value of the `minimumClusterSize` property.
     *
     * @return The minimum cluster size.
     */
    MarkerClusterer.prototype.getMinimumClusterSize = function () {
        return this.minClusterSize_;
    };
    /**
     * Sets the value of the `minimumClusterSize` property.
     *
     * @param minimumClusterSize The minimum cluster size.
     */
    MarkerClusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
        this.minClusterSize_ = minimumClusterSize;
    };
    /**
     *  Returns the value of the `maxZoom` property.
     *
     *  @return The maximum zoom level.
     */
    MarkerClusterer.prototype.getMaxZoom = function () {
        return this.maxZoom_;
    };
    /**
     *  Sets the value of the `maxZoom` property.
     *
     *  @param maxZoom The maximum zoom level.
     */
    MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
        this.maxZoom_ = maxZoom;
    };
    MarkerClusterer.prototype.getZIndex = function () {
        return this.zIndex_;
    };
    MarkerClusterer.prototype.setZIndex = function (zIndex) {
        this.zIndex_ = zIndex;
    };
    /**
     *  Returns the value of the `styles` property.
     *
     *  @return The array of styles defining the cluster markers to be used.
     */
    MarkerClusterer.prototype.getStyles = function () {
        return this.styles_;
    };
    /**
     *  Sets the value of the `styles` property.
     *
     *  @param styles The array of styles to use.
     */
    MarkerClusterer.prototype.setStyles = function (styles) {
        this.styles_ = styles;
    };
    /**
     * Returns the value of the `title` property.
     *
     * @return The content of the title text.
     */
    MarkerClusterer.prototype.getTitle = function () {
        return this.title_;
    };
    /**
     *  Sets the value of the `title` property.
     *
     *  @param title The value of the title property.
     */
    MarkerClusterer.prototype.setTitle = function (title) {
        this.title_ = title;
    };
    /**
     * Returns the value of the `zoomOnClick` property.
     *
     * @return True if zoomOnClick property is set.
     */
    MarkerClusterer.prototype.getZoomOnClick = function () {
        return this.zoomOnClick_;
    };
    /**
     *  Sets the value of the `zoomOnClick` property.
     *
     *  @param zoomOnClick The value of the zoomOnClick property.
     */
    MarkerClusterer.prototype.setZoomOnClick = function (zoomOnClick) {
        this.zoomOnClick_ = zoomOnClick;
    };
    /**
     * Returns the value of the `averageCenter` property.
     *
     * @return True if averageCenter property is set.
     */
    MarkerClusterer.prototype.getAverageCenter = function () {
        return this.averageCenter_;
    };
    /**
     *  Sets the value of the `averageCenter` property.
     *
     *  @param averageCenter The value of the averageCenter property.
     */
    MarkerClusterer.prototype.setAverageCenter = function (averageCenter) {
        this.averageCenter_ = averageCenter;
    };
    /**
     * Returns the value of the `ignoreHidden` property.
     *
     * @return True if ignoreHidden property is set.
     */
    MarkerClusterer.prototype.getIgnoreHidden = function () {
        return this.ignoreHidden_;
    };
    /**
     *  Sets the value of the `ignoreHidden` property.
     *
     *  @param ignoreHidden The value of the ignoreHidden property.
     */
    MarkerClusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
        this.ignoreHidden_ = ignoreHidden;
    };
    /**
     * Returns the value of the `enableRetinaIcons` property.
     *
     * @return True if enableRetinaIcons property is set.
     */
    MarkerClusterer.prototype.getEnableRetinaIcons = function () {
        return this.enableRetinaIcons_;
    };
    /**
     *  Sets the value of the `enableRetinaIcons` property.
     *
     *  @param enableRetinaIcons The value of the enableRetinaIcons property.
     */
    MarkerClusterer.prototype.setEnableRetinaIcons = function (enableRetinaIcons) {
        this.enableRetinaIcons_ = enableRetinaIcons;
    };
    /**
     * Returns the value of the `imageExtension` property.
     *
     * @return The value of the imageExtension property.
     */
    MarkerClusterer.prototype.getImageExtension = function () {
        return this.imageExtension_;
    };
    /**
     *  Sets the value of the `imageExtension` property.
     *
     *  @param imageExtension The value of the imageExtension property.
     */
    MarkerClusterer.prototype.setImageExtension = function (imageExtension) {
        this.imageExtension_ = imageExtension;
    };
    /**
     * Returns the value of the `imagePath` property.
     *
     * @return The value of the imagePath property.
     */
    MarkerClusterer.prototype.getImagePath = function () {
        return this.imagePath_;
    };
    /**
     *  Sets the value of the `imagePath` property.
     *
     *  @param imagePath The value of the imagePath property.
     */
    MarkerClusterer.prototype.setImagePath = function (imagePath) {
        this.imagePath_ = imagePath;
    };
    /**
     * Returns the value of the `imageSizes` property.
     *
     * @return The value of the imageSizes property.
     */
    MarkerClusterer.prototype.getImageSizes = function () {
        return this.imageSizes_;
    };
    /**
     *  Sets the value of the `imageSizes` property.
     *
     *  @param imageSizes The value of the imageSizes property.
     */
    MarkerClusterer.prototype.setImageSizes = function (imageSizes) {
        this.imageSizes_ = imageSizes;
    };
    /**
     * Returns the value of the `calculator` property.
     *
     * @return the value of the calculator property.
     */
    MarkerClusterer.prototype.getCalculator = function () {
        return this.calculator_;
    };
    /**
     * Sets the value of the `calculator` property.
     *
     * @param calculator The value of the calculator property.
     */
    MarkerClusterer.prototype.setCalculator = function (calculator) {
        this.calculator_ = calculator;
    };
    /**
     * Returns the value of the `batchSizeIE` property.
     *
     * @return the value of the batchSizeIE property.
     */
    MarkerClusterer.prototype.getBatchSizeIE = function () {
        return this.batchSizeIE_;
    };
    /**
     * Sets the value of the `batchSizeIE` property.
     *
     *  @param batchSizeIE The value of the batchSizeIE property.
     */
    MarkerClusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
        this.batchSizeIE_ = batchSizeIE;
    };
    /**
     * Returns the value of the `clusterClass` property.
     *
     * @return the value of the clusterClass property.
     */
    MarkerClusterer.prototype.getClusterClass = function () {
        return this.clusterClass_;
    };
    /**
     * Sets the value of the `clusterClass` property.
     *
     *  @param clusterClass The value of the clusterClass property.
     */
    MarkerClusterer.prototype.setClusterClass = function (clusterClass) {
        this.clusterClass_ = clusterClass;
    };
    /**
     *  Returns the array of markers managed by the clusterer.
     *
     *  @return The array of markers managed by the clusterer.
     */
    MarkerClusterer.prototype.getMarkers = function () {
        return this.markers_;
    };
    /**
     *  Returns the number of markers managed by the clusterer.
     *
     *  @return The number of markers.
     */
    MarkerClusterer.prototype.getTotalMarkers = function () {
        return this.markers_.length;
    };
    /**
     * Returns the current array of clusters formed by the clusterer.
     *
     * @return The array of clusters formed by the clusterer.
     */
    MarkerClusterer.prototype.getClusters = function () {
        return this.clusters_;
    };
    /**
     * Returns the number of clusters formed by the clusterer.
     *
     * @return The number of clusters formed by the clusterer.
     */
    MarkerClusterer.prototype.getTotalClusters = function () {
        return this.clusters_.length;
    };
    /**
     * Adds a marker to the clusterer. The clusters are redrawn unless
     *  `nodraw` is set to `true`.
     *
     * @param marker The marker to add.
     * @param nodraw Set to `true` to prevent redrawing.
     */
    MarkerClusterer.prototype.addMarker = function (marker, nodraw) {
        this.pushMarkerTo_(marker);
        if (!nodraw) {
            this.redraw_();
        }
    };
    /**
     * Adds an array of markers to the clusterer. The clusters are redrawn unless
     *  `nodraw` is set to `true`.
     *
     * @param markers The markers to add.
     * @param nodraw Set to `true` to prevent redrawing.
     */
    MarkerClusterer.prototype.addMarkers = function (markers, nodraw) {
        for (var key in markers) {
            if (Object.prototype.hasOwnProperty.call(markers, key)) {
                this.pushMarkerTo_(markers[key]);
            }
        }
        if (!nodraw) {
            this.redraw_();
        }
    };
    /**
     * Pushes a marker to the clusterer.
     *
     * @param marker The marker to add.
     */
    MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
        var _this = this;
        // If the marker is draggable add a listener so we can update the clusters on the dragend:
        if (marker.getDraggable()) {
            google.maps.event.addListener(marker, "dragend", function () {
                if (_this.ready_) {
                    marker.isAdded = false;
                    _this.repaint();
                }
            });
        }
        marker.isAdded = false;
        this.markers_.push(marker);
    };
    /**
     * Removes a marker from the cluster.  The clusters are redrawn unless
     *  `nodraw` is set to `true`. Returns `true` if the
     *  marker was removed from the clusterer.
     *
     * @param marker The marker to remove.
     * @param nodraw Set to `true` to prevent redrawing.
     * @return True if the marker was removed from the clusterer.
     */
    MarkerClusterer.prototype.removeMarker = function (marker, nodraw) {
        var removed = this.removeMarker_(marker);
        if (!nodraw && removed) {
            this.repaint();
        }
        return removed;
    };
    /**
     * Removes an array of markers from the cluster. The clusters are redrawn unless
     *  `nodraw` is set to `true`. Returns `true` if markers were removed from the clusterer.
     *
     * @param markers The markers to remove.
     * @param nodraw Set to `true` to prevent redrawing.
     * @return True if markers were removed from the clusterer.
     */
    MarkerClusterer.prototype.removeMarkers = function (markers, nodraw) {
        var removed = false;
        for (var i = 0; i < markers.length; i++) {
            var r = this.removeMarker_(markers[i]);
            removed = removed || r;
        }
        if (!nodraw && removed) {
            this.repaint();
        }
        return removed;
    };
    /**
     * Removes a marker and returns true if removed, false if not.
     *
     * @param marker The marker to remove
     * @return Whether the marker was removed or not
     */
    MarkerClusterer.prototype.removeMarker_ = function (marker) {
        var index = -1;
        if (this.markers_.indexOf) {
            index = this.markers_.indexOf(marker);
        }
        else {
            for (var i = 0; i < this.markers_.length; i++) {
                if (marker === this.markers_[i]) {
                    index = i;
                    break;
                }
            }
        }
        if (index === -1) {
            // Marker is not in our list of markers, so do nothing:
            return false;
        }
        marker.setMap(null);
        this.markers_.splice(index, 1); // Remove the marker from the list of managed markers
        return true;
    };
    /**
     * Removes all clusters and markers from the map and also removes all markers
     *  managed by the clusterer.
     */
    MarkerClusterer.prototype.clearMarkers = function () {
        this.resetViewport_(true);
        this.markers_ = [];
    };
    /**
     * Recalculates and redraws all the marker clusters from scratch.
     *  Call this after changing any properties.
     */
    MarkerClusterer.prototype.repaint = function () {
        var oldClusters = this.clusters_.slice();
        this.clusters_ = [];
        this.resetViewport_(false);
        this.redraw_();
        // Remove the old clusters.
        // Do it in a timeout to prevent blinking effect.
        setTimeout(function () {
            for (var i = 0; i < oldClusters.length; i++) {
                oldClusters[i].remove();
            }
        }, 0);
    };
    /**
     * Returns the current bounds extended by the grid size.
     *
     * @param bounds The bounds to extend.
     * @return The extended bounds.
     * @ignore
     */
    MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
        var projection = this.getProjection();
        // Turn the bounds into latlng.
        var tr = new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
        var bl = new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
        // Convert the points to pixels and the extend out by the grid size.
        var trPix = projection.fromLatLngToDivPixel(tr);
        trPix.x += this.gridSize_;
        trPix.y -= this.gridSize_;
        var blPix = projection.fromLatLngToDivPixel(bl);
        blPix.x -= this.gridSize_;
        blPix.y += this.gridSize_;
        // Convert the pixel points back to LatLng
        var ne = projection.fromDivPixelToLatLng(trPix);
        var sw = projection.fromDivPixelToLatLng(blPix);
        // Extend the bounds to contain the new bounds.
        bounds.extend(ne);
        bounds.extend(sw);
        return bounds;
    };
    /**
     * Redraws all the clusters.
     */
    MarkerClusterer.prototype.redraw_ = function () {
        this.createClusters_(0);
    };
    /**
     * Removes all clusters from the map. The markers are also removed from the map
     *  if `hide` is set to `true`.
     *
     * @param hide Set to `true` to also remove the markers from the map.
     */
    MarkerClusterer.prototype.resetViewport_ = function (hide) {
        // Remove all the clusters
        for (var i = 0; i < this.clusters_.length; i++) {
            this.clusters_[i].remove();
        }
        this.clusters_ = [];
        // Reset the markers to not be added and to be removed from the map.
        for (var i = 0; i < this.markers_.length; i++) {
            var marker = this.markers_[i];
            marker.isAdded = false;
            if (hide) {
                marker.setMap(null);
            }
        }
    };
    /**
     * Calculates the distance between two latlng locations in km.
     *
     * @param p1 The first lat lng point.
     * @param p2 The second lat lng point.
     * @return The distance between the two points in km.
     * @link http://www.movable-type.co.uk/scripts/latlong.html
     */
    MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
        var R = 6371; // Radius of the Earth in km
        var dLat = ((p2.lat() - p1.lat()) * Math.PI) / 180;
        var dLon = ((p2.lng() - p1.lng()) * Math.PI) / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((p1.lat() * Math.PI) / 180) *
                Math.cos((p2.lat() * Math.PI) / 180) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };
    /**
     * Determines if a marker is contained in a bounds.
     *
     * @param marker The marker to check.
     * @param bounds The bounds to check against.
     * @return True if the marker is in the bounds.
     */
    MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
        return bounds.contains(marker.getPosition());
    };
    /**
     * Adds a marker to a cluster, or creates a new cluster.
     *
     * @param marker The marker to add.
     */
    MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
        var distance = 40000; // Some large number
        var clusterToAddTo = null;
        for (var i = 0; i < this.clusters_.length; i++) {
            var cluster = this.clusters_[i];
            var center = cluster.getCenter();
            if (center) {
                var d = this.distanceBetweenPoints_(center, marker.getPosition());
                if (d < distance) {
                    distance = d;
                    clusterToAddTo = cluster;
                }
            }
        }
        if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
            clusterToAddTo.addMarker(marker);
        }
        else {
            var cluster = new Cluster(this);
            cluster.addMarker(marker);
            this.clusters_.push(cluster);
        }
    };
    /**
     * Creates the clusters. This is done in batches to avoid timeout errors
     *  in some browsers when there is a huge number of markers.
     *
     * @param iFirst The index of the first marker in the batch of
     *  markers to be added to clusters.
     */
    MarkerClusterer.prototype.createClusters_ = function (iFirst) {
        var _this = this;
        if (!this.ready_) {
            return;
        }
        // Cancel previous batch processing if we're working on the first batch:
        if (iFirst === 0) {
            google.maps.event.trigger(this, "clusteringbegin", this);
            if (typeof this.timerRefStatic !== "undefined") {
                clearTimeout(this.timerRefStatic);
                delete this.timerRefStatic;
            }
        }
        // Get our current map view bounds.
        // Create a new bounds object so we don't affect the map.
        //
        // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
        var mapBounds = new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(), this.getMap().getBounds().getNorthEast());
        var bounds = this.getExtendedBounds(mapBounds);
        var iLast = Math.min(iFirst + this.batchSize_, this.markers_.length);
        for (var i = iFirst; i < iLast; i++) {
            var marker = this.markers_[i];
            if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
                if (!this.ignoreHidden_ ||
                    (this.ignoreHidden_ && marker.getVisible())) {
                    this.addToClosestCluster_(marker);
                }
            }
        }
        if (iLast < this.markers_.length) {
            this.timerRefStatic = window.setTimeout(function () {
                _this.createClusters_(iLast);
            }, 0);
        }
        else {
            delete this.timerRefStatic;
            google.maps.event.trigger(this, "clusteringend", this);
            for (var i = 0; i < this.clusters_.length; i++) {
                this.clusters_[i].updateIcon();
            }
        }
    };
    /**
     * The default function for determining the label text and style
     * for a cluster icon.
     *
     * @param markers The array of markers represented by the cluster.
     * @param numStyles The number of marker styles available.
     * @return The information resource for the cluster.
     */
    MarkerClusterer.CALCULATOR = function (markers, numStyles) {
        var index = 0;
        var count = markers.length;
        var dv = count;
        while (dv !== 0) {
            dv = Math.floor(dv / 10);
            index++;
        }
        index = Math.min(index, numStyles);
        return {
            text: count.toString(),
            index: index,
            title: ""
        };
    };
    /**
     * Generates default styles augmented with user passed values.
     * Useful when you want to override some default values but keep untouched
     *
     * @param overrides override default values
     */
    MarkerClusterer.withDefaultStyle = function (overrides) {
        return __assign({ textColor: "black", textSize: 11, textDecoration: "none", textLineHeight: overrides.height, fontWeight: "bold", fontStyle: "normal", fontFamily: "Arial,sans-serif", backgroundPosition: "0 0" }, overrides);
    };
    /**
     * The number of markers to process in one batch.
     */
    MarkerClusterer.BATCH_SIZE = 2000;
    /**
     * The number of markers to process in one batch (IE only).
     */
    MarkerClusterer.BATCH_SIZE_IE = 500;
    /**
     * The default root name for the marker cluster images.
     */
    MarkerClusterer.IMAGE_PATH = "../images/m";
    /**
     * The default extension name for the marker cluster images.
     */
    MarkerClusterer.IMAGE_EXTENSION = "png";
    /**
     * The default array of sizes for the marker cluster images.
     */
    MarkerClusterer.IMAGE_SIZES = [53, 56, 66, 78, 90];
    return MarkerClusterer;
}(OverlayViewSafe));

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 83567:
/*!*****************************************************!*\
  !*** ./src/app/layouts/maps/maps-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPageRoutingModule": () => (/* binding */ MapsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps.page */ 59249);




const routes = [
    {
        path: '',
        component: _maps_page__WEBPACK_IMPORTED_MODULE_0__.MapsPage
    }
];
let MapsPageRoutingModule = class MapsPageRoutingModule {
};
MapsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapsPageRoutingModule);



/***/ }),

/***/ 62289:
/*!*********************************************!*\
  !*** ./src/app/layouts/maps/maps.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPageModule": () => (/* binding */ MapsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps-routing.module */ 83567);
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page */ 59249);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let MapsPageModule = class MapsPageModule {
};
MapsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapsPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_1__.MapsPage]
    })
], MapsPageModule);



/***/ }),

/***/ 59249:
/*!*******************************************!*\
  !*** ./src/app/layouts/maps/maps.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPage": () => (/* binding */ MapsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_maps_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maps.page.html */ 98753);
/* harmony import */ var _maps_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page.scss */ 78762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _googlemaps_markerclustererplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @googlemaps/markerclustererplus */ 47817);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_shared_Service_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/page.service */ 82112);
/* harmony import */ var src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Service/calendar.service */ 13183);









// declare var MarkerClusterer: any;
let MapsPage = class MapsPage {
    constructor(calendarService, pageService, zone, userService) {
        this.calendarService = calendarService;
        this.pageService = pageService;
        this.zone = zone;
        this.userService = userService;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.geocoder = new google.maps.Geocoder;
        this.markers = [];
        this.distantMarkers = [];
        this.apiImgUser = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg}User/`;
        this.travelMode = 'WALKING';
        this.routeColor = 'blue';
        this.apiImgPage = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg}page/`;
        this.apiImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg + 'Activity/';
        this.icons = [
            {
                type: "lieu",
                url: "http://cdn.onlinewebfonts.com/svg/img_398600.png"
            },
            {
                type: "Entreprise",
                url: "http://cdn.onlinewebfonts.com/svg/img_451784.png"
            },
            {
                type: "Commerce local",
                url: "https://findicons.com/files/icons/2718/pretty_office_icon_set_part_11/512/shop.png"
            },
            {
                type: "Organisme",
                url: "http://cdn.onlinewebfonts.com/svg/img_451784.png"
            },
            {
                type: "event",
                url: "https://cdn.iconscout.com/icon/premium/png-256-thumb/event-6-285437.png"
            },
            {
                type: "association",
                url: "https://img2.freepng.fr/20180609/gcb/kisspng-malaysian-red-crescent-society-logo-international-andrea-harsell-luna-roja-5b1c1f41da23a6.4158441115285696658935.jpg"
            },
        ];
        this.allPages = [];
        this.allEvents = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: this.routeColor
            }, suppressMarkers: true
        });
        this.imagePath = "../../assets/icon/m/m";
    }
    ngOnInit() {
        this.getAllPages();
        this.getUser();
        this.getEvents();
    }
    setWalking() {
        this.routeColor = 'blue';
        this.travelMode = 'WALKING';
        this.makeRoute();
    }
    setDriving() {
        this.routeColor = 'green';
        this.travelMode = 'DRIVING';
        this.makeRoute();
    }
    getDistTime(dist, time, start, end) {
        this.dist = dist;
        this.time = time;
        this.startAddress = start;
        this.endAddress = end;
    }
    setMapOnAll(map) {
        for (let i = 0; i < this.distantMarkers.length; i++) {
            this.distantMarkers[i].setMap(map);
        }
    }
    getAllPages() {
        this.pageService.getAllPages().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () { return this.allPages = yield res.data.data; }));
    }
    getEvents() {
        this.calendarService.getAllEvents().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield res.map(el => (el.confidentiality !== "public" || el.lieu ? null : this.allEvents.push(el)));
        }));
    }
    hideMarkers() {
        this.setMapOnAll(null);
    }
    deleteDistance() {
        this.hideMarkers();
        this.distantMarkers = [];
        this.directionsRenderer.setMap(null);
    }
    makeRoute() {
        this.directionsRenderer.setMap(this.map); // Existing map object displays directions
        // Create route from existing points used for markers
        const start = { lat: this.distantMarkers[0].position.toJSON().lat, lng: this.distantMarkers[0].position.toJSON().lng };
        const finish = { lat: this.distantMarkers[1].position.toJSON().lat, lng: this.distantMarkers[1].position.toJSON().lng };
        const route = {
            origin: start,
            destination: finish,
            travelMode: this.travelMode
        };
        this.directionsService.route(route, (response, status) => {
            if (status == 'OK') {
                var dist = response.routes[0].legs[0].distance.text;
                var time = response.routes[0].legs[0].duration.text;
                var start = response.routes[0].legs[0].start_address;
                var end = response.routes[0].legs[0].end_address;
                this.directionsRenderer.setDirections(response); // Add route to the map
                // var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
                // console.log(response)
                this.getDistTime(dist, time, start, end);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
    getUser() {
        this.userService.getMe().subscribe(res => {
            // console.log(res.data.data);
            this.user = res.data.data;
            this.tryGeolocation();
        });
    }
    tryGeolocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.initMap();
        });
    }
    initMap() {
        var _a, _b;
        this.markers = [];
        this.distantMarkers = [];
        this.map = new google.maps.Map(document.getElementById("map"), {
            mapId: "59300b885073112e",
            center: { lat: this.lat, lng: this.lng },
            zoom: 8,
        });
        const contentString = `<a style="display:flex;flex-direction:column;align-items:center;text-decoration: n;color:green" href="/menu/tabs/layouts/coachprofile/${this.user.id}/me">
      <ion-avatar slot="" class="ion-padding" >
        <img src="${this.apiImgUser + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.photo)}"/>
      </ion-avatar>
      <span style="font-size:15px;font-weight:bold;text-transform:capitalize">${this.user.name}</span>
    </a>`;
        const infoWindow = new google.maps.InfoWindow({
            content: contentString,
        });
        let marker = new google.maps.Marker({
            position: { lat: this.lat, lng: this.lng },
            map: this.map,
            title: 'I am here!',
            label: {
                text: this.user.name.charAt(0).toUpperCase() + this.user.name.slice(1),
                fontSize: "15px",
                fontWeight: "bold"
            },
            icon: {
                url: this.apiImgUser + ((_b = this.user) === null || _b === void 0 ? void 0 : _b.photo),
                size: new google.maps.Size(54, 54),
                scaledSize: new google.maps.Size(54, 54),
                labelOrigin: new google.maps.Point(28, 70),
                optimized: false
            },
            animation: google.maps.Animation.DROP,
        });
        var styles = [
            _googlemaps_markerclustererplus__WEBPACK_IMPORTED_MODULE_3__.default.withDefaultStyle({
                height: 25,
                url: "../../assets/icon/m/m1.png",
                width: 25,
                textColor: `black`,
                anchorText: [0, 0]
            })
        ];
        var mcOptions = {
            styles: styles
        };
        //get location from click on map
        this.map.addListener("click", (mapsMouseEvent) => {
            // console.log(this.distantMarkers)
            let lat = mapsMouseEvent.latLng.toJSON().lat;
            let lng = mapsMouseEvent.latLng.toJSON().lng;
            let marker = new google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: this.map,
                animation: google.maps.Animation.BOUNCE,
            });
            this.distantMarkers.push(marker);
            if (this.distantMarkers.length === 2) {
                this.makeRoute();
            }
        });
        for (let i = 0; i < this.allPages.length; i++) {
            let shape = { coords: [25, 25, 25], type: 'circle' };
            let marker = new google.maps.Marker({
                position: { lat: +this.allPages[i].lattitude, lng: +this.allPages[i].langitude },
                map: this.map,
                title: this.allPages[i].name,
                label: {
                    text: this.allPages[i].name.charAt(0).toUpperCase() + this.allPages[i].name.slice(1),
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "blue"
                },
                icon: {
                    url: this.allPages[i].photo ? this.apiImgPage + this.allPages[i].photo : this.icons[1].url,
                    size: new google.maps.Size(50, 50),
                    scaledSize: new google.maps.Size(50, 50),
                    labelOrigin: new google.maps.Point(30, 70),
                    shape: shape,
                    optimized: false,
                },
                animation: google.maps.Animation.DROP,
            });
            this.markers.push(marker);
            const contentString = `<a style="display:flex;flex-direction:column;align-items:center;text-decoration: n;color:green" href="/community/show-page/${this.allPages[i]._id}">
      <ion-avatar slot="" class="ion-padding" >
        <img src="${this.allPages[i].photo ? this.apiImgPage + this.allPages[i].photo : this.icons[1].url}"/>
      </ion-avatar>
      <span style="font-size:15px;font-weight:bold;text-transform:capitalize">${this.allPages[i].name}</span>
    </a>`;
            const infoWindow = new google.maps.InfoWindow({
                content: contentString,
            });
            marker.addListener('click', () => {
                infoWindow.open({
                    anchor: marker,
                    map: this.map,
                });
            });
        }
        for (let i = 0; i < this.allEvents.length; i++) {
            let shape = { coords: [25, 25, 25], type: 'circle' };
            let marker = new google.maps.Marker({
                position: { lat: +this.allEvents[i].lattitude, lng: +this.allEvents[i].langitude },
                map: this.map,
                title: this.allEvents[i].activity,
                label: {
                    text: this.allEvents[i].activity.charAt(0).toUpperCase() + this.allEvents[i].activity.slice(1),
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "red"
                },
                icon: {
                    url: this.allEvents[i].cover ? this.apiImg + this.allEvents[i].cover : this.icons[4].url,
                    size: new google.maps.Size(50, 50),
                    scaledSize: new google.maps.Size(50, 50),
                    labelOrigin: new google.maps.Point(30, 70),
                    shape: shape,
                    optimized: false,
                },
                animation: google.maps.Animation.DROP,
            });
            this.markers.push(marker);
            const contentString = `<a style="display:flex;flex-direction:column;align-items:center;text-decoration: n;color:green" href="/community/show-event/${this.allEvents[i]._id}">
      <ion-avatar slot="" class="ion-padding" >
        <img src="${this.allEvents[i].cover ? this.apiImg + this.allEvents[i].cover : this.icons[4].url}"/>
      </ion-avatar>
      <span style="font-size:15px;font-weight:bold;text-transform:capitalize">${this.allEvents[i].activity}</span>
    </a>`;
            const infoWindow = new google.maps.InfoWindow({
                content: contentString,
            });
            marker.addListener('click', () => {
                infoWindow.open({
                    anchor: marker,
                    map: this.map,
                });
            });
        }
        const MC = new _googlemaps_markerclustererplus__WEBPACK_IMPORTED_MODULE_3__.default(this.map, this.markers, mcOptions);
        marker.addListener('click', () => {
            infoWindow.open({
                anchor: marker,
                map: this.map,
            });
        });
    }
    updateSearchResults() {
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                });
            });
        });
    }
    selectSearchResult(item) {
        this.markers = [];
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'placeId': item.place_id }, (results, status) => {
            if (status === 'OK' && results[0]) {
                let position = {
                    lat: results[0].geometry.location.lat,
                    lng: results[0].geometry.location.lng
                };
                let marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: this.map,
                });
                this.markers.push(marker);
                this.map.setCenter(results[0].geometry.location);
            }
        });
    }
};
MapsPage.ctorParameters = () => [
    { type: src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_6__.CalendarService },
    { type: src_app_shared_Service_page_service__WEBPACK_IMPORTED_MODULE_5__.PageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
MapsPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef, static: false },] }]
};
MapsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-maps',
        template: _raw_loader_maps_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_maps_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapsPage);



/***/ }),

/***/ 13183:
/*!****************************************************!*\
  !*** ./src/app/shared/Service/calendar.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarService": () => (/* binding */ CalendarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);





let CalendarService = class CalendarService {
    constructor(apiService) {
        this.apiService = apiService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    sendEvent(evt) {
        this.subject.next({ event: evt });
    }
    getEvent() {
        return this.subject.asObservable();
    }
    getActivitiesbyID(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data.data));
    }
    getEventsbyID(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}?createdBy=${id}&type='event'`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data.data));
    }
    getAllEvents() {
        let event = 'event';
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}?type=${event}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data.data));
    }
    addActivity(activity) {
        return this.apiService
            .post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}`, activity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res));
    }
    updateEvent(event) {
        return this.apiService.put(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}${event._id}`, event);
    }
    deleteEvent(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}` + id);
    }
    getEventbyID(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data.data));
    }
    updateCoverEvent(event) {
        console.log(event);
        return this.apiService.put(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}cover`, event);
    }
};
CalendarService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
CalendarService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CalendarService);



/***/ }),

/***/ 82112:
/*!************************************************!*\
  !*** ./src/app/shared/Service/page.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageService": () => (/* binding */ PageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);




let PageService = class PageService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getpagesbyID(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/getAll/?createdBy=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    addPage(Page) {
        return this.apiService
            .post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}`, Page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    updatepage(page) {
        return this.apiService.put(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/${page._id}`, page);
    }
    deletepage(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}` + id);
    }
    getOnePage(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/getAll/?_id=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    getAllPages() {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/getAll`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    updateCoverPage(page) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}` + '/cover', page);
    }
    updateProfileImagePage(page) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/imageProfile`, page);
    }
};
PageService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
PageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PageService);



/***/ }),

/***/ 78762:
/*!*********************************************!*\
  !*** ./src/app/layouts/maps/maps.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label,\n.slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n.HeaderFilter {\n  background-color: #e4e4e4;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.item,\n.item-divider {\n  border-color: red;\n}\n\n.myItem {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n#map {\n  height: 90%;\n  margin: 20px;\n  border-radius: 10px;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-title {\n  color: #24830e;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBSUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRkY7O0FBWUE7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFUTTtBQUFSOztBQVlBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQWZNO0VBZ0JOLG9CQUFBO0VBQ0EsYUFqQk07RUFrQk4seUJBaEJTO0VBaUJULDJCQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBV0U7RUFDRSwrREFBQTtBQVRKOztBQVlFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFYSjs7QUFhSTtFQUNFLGVBQUE7QUFYTjs7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBZEo7O0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFmSjs7QUFrQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFoQko7O0FBb0JBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBakJGOztBQW9CQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsWUFBQTtBQWpCRjs7QUFvQkE7RUFDRSxVQUFBO0FBakJGOztBQW1CRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBakJKOztBQXFCQTtFQUNFLHlFQUFBO0FBbEJGOztBQXNCQTtFQUdFLCtEQUFBO0FBckJGOztBQXlJQTtFQUNFLFdBQUE7QUF0SUY7O0FBMElBO0VBQ0UsYUFBQTtBQXZJRjs7QUEwSUE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQXZJRjs7QUEySUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBeElGOztBQTRJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBeklGOztBQTRJQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQXpJRjs7QUE0SUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBeklGOztBQTRJQSxZQUFBOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBMUlGOztBQTZJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTFJRjs7QUE2SUEsYUFBQTs7QUFDQTs7RUFFRSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7QUExSUY7O0FBNklBLFNBQUE7O0FBRUE7RUFDRSxVQUFBO0FBM0lGOztBQWdKQTtFQUNFLGNBQUE7QUE3SUY7O0FBZ0pBO0VBQ0UsZ0JBQUE7QUE3SUY7O0FBZ0pBO0VBQ0UsZ0JBQUE7QUE3SUY7O0FBZ0pBO0VBQ0UseUJBQUE7QUE3SUY7O0FBc0pBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQW5KRjs7QUFzSkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0FBcEpGOztBQXVKQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBcEpGOztBQXlKQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF0SkY7O0FBMEpBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUF2SkY7O0FBMEpBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUF2SkY7O0FBMkpBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUF4SkY7O0FBMkpBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUF4SkY7O0FBZ01BOztFQUVFLGlCQUFBO0FBN0xGOztBQWdNQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUE3TEY7O0FBaU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTlMRjs7QUFpTUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUEvTEY7O0FBa01BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBL0xGOztBQWtNQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBak1GOztBQW9NQTtFQUNFLHFCQUFBO0FBak1GOztBQW9NQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBak1GIiwiZmlsZSI6Im1hcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNjb250YWluZXIge1xuICBoZWlnaHQ6IDgwMHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JlZW47IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLy8gY3NzIGJ1dHRvblxuJHJ1bGVyOiAxNnB4O1xuJGNvbG9yLXJlZDogIzcyNmI2YjtcbiRjb2xvci1iZzogI0VCRUNGMDtcbiRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XG4kY29sb3Itd2hpdGU6ICNGRkY7XG5cbmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICBib3JkZXItcmFkaXVzOiAkcnVsZXIqMjA7XG4gIHBhZGRpbmc6ICRydWxlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICRjb2xvci13aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6ICM2MTY3N0M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAtNXB4IC01cHggMjBweCAkY29sb3Itd2hpdGUsIDFweCAxcHggNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogODAwO1xuXG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAkY29sb3Itc2hhZG93LCBpbnNldCAtMXB4IC0xcHggMnB4ICRjb2xvci13aGl0ZTtcbiAgfVxuXG4gICYudW5pdCB7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgLy9ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAxcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgJHJ1bGVyLzI7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMS4yO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIC5pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY2FyZC10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLm15Rm9vdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gIHBhZGRpbmctYm90dG9tOiAwNXB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4ICMyNDcyMzg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwICRydWxlcioyO1xuICBmb250LXNpemU6ICRydWxlciozLjI7XG4gIHdpZHRoOiAzNDBweDtcbn1cblxuLm15Z2FsbGVyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBib3R0b206IDUlO1xuXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjQ3MjM4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBvcGFjaXR5OiA1LjI7XG4gIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNDcyMzgsICMyNDcyMzgsICM4RUJGMjUsICM4RUJGMjUpO1xuXG59XG5cbi5zaGFkb3dib3gge1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOEVCRjI1O1xuICAvLyBib3gtc2hhZG93OiAycHggMXB4IDFweCAjMjQ3MjM4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZGRkIDQwJSwgI2NjYyk7XG59XG5cblxuLy9cblxuXG5cbi8vIC5jbGVhcntcbi8vICAgY2xlYXI6IGJvdGg7XG4vLyB9XG5cblxuLy8gLnNsaWRlLXRvZ2dsZXtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gLnNsaWRlbWVudXtcbi8vICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuLy8gICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIG1hcmdpbjogNTBweCBhdXRvO1xuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vLyAuc2xpZGVtZW51IGxhYmVse1xuLy8gICB3aWR0aDogMjUlO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgY29sb3I6ICMzMzM7XG4vLyAgIG9wYWNpdHk6IDAuMjtcblxuLy8gfVxuXG5cblxuXG4vLyAuc2xpZGVtZW51IGxhYmVsIC5pY29ue1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIGJvcmRlcjogc29saWQgMnB4ICMzMzM7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgaGVpZ2h0OiA1MHB4O1xuLy8gICB3aWR0aDogNTBweDtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBsaW5lLWhlaWdodDogNTBweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gfVxuXG4vLyAvKkJhciBTdHlsZSovXG5cblxuXG4vLyAuc2xpZGVyIC5iYXJ7XG4vLyAgIHdpZHRoOiA1MCU7XG4vLyAgIGhlaWdodDogNXB4O1xuLy8gICBiYWNrZ3JvdW5kOiByZ2IoMSwgNjgsIDM3KTtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gfVxuXG4vLyAvKkFuaW1hdGlvbnMqL1xuLy8gLnNsaWRlbWVudSBsYWJlbCwgLnNsaWRlciAuYmFyIHtcbi8vICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyB9XG5cbi8vIC8qVG9nZ2xlKi9cblxuLy8gLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcbi8vICAgb3BhY2l0eTogMTtcbi8vIH1cblxuXG5cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAzMCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTQ6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDc1JTsgfVxuXG5cblxuLy8gbmF2IHtcbi8vICAgbWF4LXdpZHRoOjEwMCU7XG4vLyAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgI2ZmZmZmZiAyNSUsICNmZmZmZmYgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBtYXJnaW46IDAgYXV0bztcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gfVxuXG4vLyBuYXYgdWwge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDI1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbi8vICAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIH1cblxuLy8gbmF2IHVsIGxpIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkgYSB7XG4vLyAgIHBhZGRpbmc6MTBweDtcbi8vICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4vLyAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbi8vICAgY29sb3I6IGJsYWNrO1xuLy8gICBmb250LXNpemU6IDEwcHg7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhOmhvdmVyIHtcbi8vICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuLy8gICBjb2xvcjogIzhFQkYyNTtcbi8vIH1cblxuXG4uY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuXG4uc2xpZGUtdG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlbWVudSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMTBweCAyMHB4IDIwcHggYXV0bztcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogZ3JlZW47XG4gIG9wYWNpdHk6IDAuMjtcblxufVxuXG4uc2xpZGVtZW51IGxhYmVsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzI0NzIzODtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzI0NzIzODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qQmFyIFN0eWxlKi9cblxuLnNsaWRlciB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2xpZGVyIC5iYXIge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLypBbmltYXRpb25zKi9cbi5zbGlkZW1lbnUgbGFiZWwsXG4uc2xpZGVyIC5iYXIge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLypUb2dnbGUqL1xuXG4uc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCtsYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTE6Y2hlY2tlZH4uc2xpZGVyIC5iYXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWR+LnNsaWRlciAuYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWR+LnNsaWRlciAuYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLkhlYWRlckZpbHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gIC8vIGhlaWdodDogNSU7XG5cbn1cblxuLkJhZHlGaWx0ZXIge31cblxuXG5cbiNjYXJ0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm91dHRlci1iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA2NHB4O1xufVxuXG4uaW5uZXItYmFkZ2UtT0sge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblxufVxuXG4uaW5uZXItYmFkZ2UtT0sgLmJhZGdlQ2FuY2VsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuLmlubmVyLWJhZGdlLUtPIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogLTEwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlubmVyLWJhZGdlLUtPIC5iYWRnZUNhbmNlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDhweDtcblxufVxuXG4uaW5uZXItYmFkZ2UtVGNoYXQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yM3B4O1xuICBsZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5uZXItYmFkZ2UtVGNoYXQgLmJhZGdlQ2FuY2VsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5cblxuXG5cblxuXG5cblxuXG4vLyB1bCB7XG4vLyAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbi8vICAgd2lkdGg6IDUwMHB4O1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQ6IGJvbGQgMjBweC8xLjUgSGVsdmV0aWNhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuLy8gfVxuXG4vLyBsaSBpbWcge1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuLy8gfVxuXG4vLyBsaSBwIHtcbi8vICAgZm9udDogMjAwIDEycHgvMS41IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG4vLyB9XG5cbi8vIGxpIHtcbi8vICAgcGFkZGluZzogMTBweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIGxpOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZDogI2VlZTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4uaXRlbSxcbi5pdGVtLWRpdmlkZXIge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLm15SXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICBwYWRkaW5nLWJvdHRvbTogMDVweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwICRydWxlcioyO1xuICBmb250LXNpemU6ICRydWxlciozLjI7XG4gIHdpZHRoOiAzNDBweDtcblxufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiByZ2IoMzYsIDEzMSwgMTQpO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 98753:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/maps/maps.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Map\" [isDetails]=\"true\"></app-header>\n<ion-content style=\"position: relative;\" [fullscreen]=\"true\">\n  <div style=\"position: absolute;z-index:10;top:76px;left:20px\">\n    <ion-searchbar style=\"width: 80%;\" [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\"\n      placeholder=\"Search for a place\">\n    </ion-searchbar>\n\n    <ion-item *ngIf=\"distantMarkers.length===2\" style=\"margin-left:8px;border-radius:5px;width:90%\">\n      <ion-label>From :</ion-label>\n      <ion-input>{{startAddress}}</ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"distantMarkers.length===2\" style=\"margin-left:8px;border-radius:5px;width:90%;margin-top:5px\">\n      <ion-label>To :</ion-label>\n      <ion-input>{{endAddress}}</ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"distantMarkers.length===2\" style=\"margin-left:8px;border-radius:5px;width:90%;margin-top:5px\">\n      <ion-input>{{dist}}</ion-input>\n      <ion-input>{{time}}</ion-input>\n      <ion-input>{{travelMode}}</ion-input>\n    </ion-item>\n\n    <ion-button color=\"success\" style=\"margin-left:8px;\" (click)=\"tryGeolocation()\">\n      <ion-icon name=\"locate\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"distantMarkers.length===2\" color=\"success\" style=\"margin-left:8px;\" (click)=\"setDriving()\">\n      <ion-icon name=\"car\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"distantMarkers.length===2\" color=\"success\" style=\"margin-left:8px;\" (click)=\"setWalking()\">\n      <ion-icon name=\"walk\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"distantMarkers.length===2\" color=\"danger\" style=\"margin-left:8px;\" (click)=\"deleteDistance()\">\n      <ion-icon name=\"close-circle-outline\"></ion-icon>\n    </ion-button>\n  </div>\n  <ion-list style=\"position: absolute;z-index:20;top:130px;width:100%\" [hidden]=\"autocompleteItems.length === 0\">\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n  <div #map id=\"map\"></div>\n</ion-content>\n<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyB-VMPrrhwq2tQrKGcT8mbEpTEmPzAK5y8\"></script>\n<script src=\"https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js\"></script>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_maps_maps_module_ts.js.map