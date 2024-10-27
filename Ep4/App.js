import React from "react";
import ReactDOM from "react-dom/client";
/*
- header
    - logo
    - nav items
- body
    - restaurant cards
- footer
    - location 
    - links
    
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images.vexels.com/content/296149/preview/father-s-day-food-groceries-bag-icon-e71df6.png" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const resList = [

    {
        "storeUuid": "95ae107f-0d61-5e2e-ad14-0140b3e1efa3",
        "title": {
            "text": "Domino's"
        },
        "meta": [
            {
                "text": "$1.49 Delivery Fee",
                "textFormat": "<span><span style=\"color:#3a3a48\">$1.49 Delivery Fee</span></span>",
                "accessibilityText": "$1.49 Delivery Fee",
                "badgeType": "FARE",
                "badgeData": {
                    "fare": {
                        "isSurge": false,
                        "deliveryFee": "$1.49 Delivery Fee",
                        "serviceFee": ""
                    },
                    "type": "fare"
                }
            },
            {
                "text": "35–55 min",
                "accessibilityText": "Delivered in 35 to 55 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.6",
            "accessibilityText": "A top rated restaurant with 4.6 out of 5 stars based on more than 110 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/dominos-1185-vestal-ave/la4Qfw1hXi6tFAFAs-Hvow",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60d358c051219716c6f9cf75460c59f3/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60d358c051219716c6f9cf75460c59f3/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60d358c051219716c6f9cf75460c59f3/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60d358c051219716c6f9cf75460c59f3/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60d358c051219716c6f9cf75460c59f3/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60d358c051219716c6f9cf75460c59f3/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
                "text": " Top Offer • Free Item (Spend $12)",
                "textColor": {
                    "color": "#FFFFFF"
                },
                "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • Free Item (Spend $12)</span>"
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "95ae107f-0d61-5e2e-ad14-0140b3e1efa3",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.01262593548744917,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.01934449193685145,
                        "HmooScorePreSCR": 0.0238445949498564,
                        "NetInflowPredictionScore": 22.51414680480957,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.0238445949498564,
                        "ServiceQualityPredictionScore": 0.8982259035110474,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.8112736650604312,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.01262593548744917,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.05776209384202957,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 22.51414680480957,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.8982259035110474,
                        "t120d_eyeball_count": 3989,
                        "t120d_request_count": 555
                    },
                    "total": 0.01934449193685145
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 35,
                        "max": 55,
                        "raw": 40
                    }
                },
                "fareInfo": {
                    "serviceFee": 1.49,
                    "dynamicBookingFeeTier": 0,
                    "actualServiceFee": {
                        "high": 0,
                        "low": 149,
                        "unsigned": false
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.613861386138615,
                    "ratingCount": "110+"
                },
                "promotionUUID": "694988d7-4492-4a03-8eaa-51c3c2215d46",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "be94bd84-54ba-4e76-9199-c01006bc1346",
                    "promotionUUIDs": [
                        "694988d7-4492-4a03-8eaa-51c3c2215d46"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "offer_quality.top_offer,promo.restaurant.free_item_with_min_basket"
                }
            }
        },
        "mapMarker": {
            "latitude": 42.0896,
            "longitude": -75.9139,
            "zIndex": 9998,
            "description": {
                "title": "Domino's",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.6",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },
    {
        "storeUuid": "897b5f5d-3d7e-4ddd-83d3-c586a6b7c65f",
        "title": {
            "text": "Popeyes Louisiana Chicken"
        },
        "meta": [
            {
                "text": "20–35 min",
                "accessibilityText": "Delivered in 20 to 35 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "3.9",
            "accessibilityText": "Rated 3.9 out of 5 stars based on more than 2,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/popeyes-louisiana-chicken-164-main-st/iXtfXT1-Td2D08WGprfGXw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/cde28c86f0229d0633618052ce92975b/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/cde28c86f0229d0633618052ce92975b/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/cde28c86f0229d0633618052ce92975b/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/cde28c86f0229d0633618052ce92975b/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/cde28c86f0229d0633618052ce92975b/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/cde28c86f0229d0633618052ce92975b/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "text": "2 Offers Available",
                "textColor": {
                    "color": "#FFFFFF"
                }
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "897b5f5d-3d7e-4ddd-83d3-c586a6b7c65f",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.013884895481169224,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.018319901854472208,
                        "HmooScorePreSCR": 0.0245467015337199,
                        "NetInflowPredictionScore": 26.455047607421875,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.0245467015337199,
                        "ServiceQualityPredictionScore": 0.8837056159973145,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7463284559559291,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.013884895481169224,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.04087991267442703,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 26.455047607421875,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.8837056159973145,
                        "t120d_eyeball_count": 10878,
                        "t120d_request_count": 1799
                    },
                    "total": 0.018319901854472208
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 20,
                        "max": 35,
                        "raw": 30
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 3.930245854774146,
                    "ratingCount": "2,000+"
                },
                "promotionUUID": "839775c5-fbc9-4439-b619-45b4f2e5671b",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "39612dc3-c830-47bd-af00-cde85064839f",
                    "promotionUUIDs": [
                        "839775c5-fbc9-4439-b619-45b4f2e5671b",
                        "c20aaa62-c453-42da-9537-b8ddf023524c"
                    ],
                    "offerTypeCount": 2,
                    "concatSignpost": "concurrent_offer.signpost.num.of.offers.available"
                }
            }
        },
        "mapMarker": {
            "latitude": 42.1035,
            "longitude": -75.9302,
            "zIndex": 9997,
            "description": {
                "title": "Popeyes Louisiana Chicken",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "3.9",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },
    {
        "storeUuid": "fcfeac9c-824e-47fa-a298-08a4dd00cd24",
        "title": {
            "text": "Five Guys"
        },
        "meta": [
            {
                "text": "30–45 min",
                "accessibilityText": "Delivered in 30 to 45 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.6",
            "accessibilityText": "A top rated restaurant with 4.6 out of 5 stars based on more than 2,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/five-guys-4700-vestal-pkwy-east-ny-376/_P6snIJOR_qimAik3QDNJA",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/00684bcd980ca628ead3946e66eb2d28/fb86662148be855d931b37d6c1e5fcbe.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/00684bcd980ca628ead3946e66eb2d28/783282f6131ef2258e5bcd87c46aa87e.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/00684bcd980ca628ead3946e66eb2d28/8a42ee7a692dfa4155879820804a277f.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/00684bcd980ca628ead3946e66eb2d28/fdf52d66534809b650058f41d517d74a.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/00684bcd980ca628ead3946e66eb2d28/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/00684bcd980ca628ead3946e66eb2d28/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "text": "Free Item (Spend $35)",
                "textColor": {
                    "color": "#FFFFFF"
                }
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "fcfeac9c-824e-47fa-a298-08a4dd00cd24",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.011927995830774307,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.014217065627256066,
                        "HmooScorePreSCR": 0.02110043899714947,
                        "NetInflowPredictionScore": 30.030149459838867,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.02110043899714947,
                        "ServiceQualityPredictionScore": 0.9158790111541748,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.6737805611142355,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.011927995830774307,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.03529791161417961,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 30.030149459838867,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9158790111541748,
                        "t120d_eyeball_count": 9578,
                        "t120d_request_count": 1090
                    },
                    "total": 0.014217065627256066
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 30,
                        "max": 45,
                        "raw": 40
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.612287503728002,
                    "ratingCount": "2,000+"
                },
                "promotionUUID": "86f77abd-2471-48e7-94db-6ba8024c1dd1",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "0806f350-b7ef-4977-9eec-dba746a0544f",
                    "promotionUUIDs": [
                        "86f77abd-2471-48e7-94db-6ba8024c1dd1"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "promo.restaurant.free_item_with_min_basket"
                }
            }
        },
        "mapMarker": {
            "latitude": 42.0918,
            "longitude": -75.9519,
            "zIndex": 9996,
            "description": {
                "title": "Five Guys",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.6",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },
    {
        "storeUuid": "076f6b0d-a191-4b09-8aa7-1012192372a6",
        "title": {
            "text": "Wendy's"
        },
        "meta": [
            {
                "text": "20–35 min",
                "accessibilityText": "Delivered in 20 to 35 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.1",
            "accessibilityText": "Rated 4.1 out of 5 stars based on more than 1,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/wendys-170-main-street/B29rDaGRSwmKpxASGSNypg",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "text": "Buy 1, Get 1 Free",
                "textColor": {
                    "color": "#FFFFFF"
                }
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "076f6b0d-a191-4b09-8aa7-1012192372a6",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.01008955854922533,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.013831286792218006,
                        "HmooScorePreSCR": 0.01776303998567164,
                        "NetInflowPredictionScore": 22.306076049804688,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.01776303998567164,
                        "ServiceQualityPredictionScore": 0.8493251800537109,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7786553880064934,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.01008955854922533,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.02870573289692402,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 22.306076049804688,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.8493251800537109,
                        "t120d_eyeball_count": 5358,
                        "t120d_request_count": 632
                    },
                    "total": 0.013831286792218006
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 20,
                        "max": 35,
                        "raw": 30
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.094539048737519,
                    "ratingCount": "1,000+"
                },
                "promotionUUID": "a431bf25-b8ed-401d-8c51-b700a49522d4",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN",
                "offerMetadata": {
                    "analyticsUUID": "93d0c9d2-4c71-479d-9b64-88c2fc204f61",
                    "promotionUUIDs": [
                        "a431bf25-b8ed-401d-8c51-b700a49522d4"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
                }
            }
        },
        "mapMarker": {
            "latitude": 42.1037,
            "longitude": -75.9306,
            "zIndex": 9995,
            "description": {
                "title": "Wendy's ",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.1",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },
    {
        "storeUuid": "b07c8f02-36e0-4bc8-89f0-7f6084db7ae0",
        "title": {
            "text": "Taco Bell"
        },
        "meta": [
            {
                "text": "30–45 min",
                "accessibilityText": "Delivered in 30 to 45 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on more than 2,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/taco-bell-220-reynolds-road/sHyPAjbgS8iJ8H9ghNt64A",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/342ec8be8e4377a5e7bbbc11ade4033b/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/342ec8be8e4377a5e7bbbc11ade4033b/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/342ec8be8e4377a5e7bbbc11ade4033b/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/342ec8be8e4377a5e7bbbc11ade4033b/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/342ec8be8e4377a5e7bbbc11ade4033b/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/342ec8be8e4377a5e7bbbc11ade4033b/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "text": "Buy 1, Get 1 Free",
                "textColor": {
                    "color": "#FFFFFF"
                }
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "b07c8f02-36e0-4bc8-89f0-7f6084db7ae0",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.01004192978143692,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.013428309857124562,
                        "HmooScorePreSCR": 0.01756771636009216,
                        "NetInflowPredictionScore": 25.49081039428711,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.01756771636009216,
                        "ServiceQualityPredictionScore": 0.8727502822875977,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7643742409018559,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.01004192978143692,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.027063854038715363,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 25.49081039428711,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.8727502822875977,
                        "t120d_eyeball_count": 5636,
                        "t120d_request_count": 1317
                    },
                    "total": 0.013428309857124562
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 30,
                        "max": 45,
                        "raw": 40
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.339416058394156,
                    "ratingCount": "2,000+"
                },
                "promotionUUID": "c7cca361-b5cb-4fb3-8890-a24c24e553bc",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "2c9b23a7-15b1-4357-935b-5470bfeb298b",
                    "promotionUUIDs": [
                        "c7cca361-b5cb-4fb3-8890-a24c24e553bc"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
                }
            }
        },
        "mapMarker": {
            "latitude": 42.1265,
            "longitude": -75.9712,
            "zIndex": 9994,
            "description": {
                "title": "Taco Bell",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },
    {
        "storeUuid": "c2ec97d6-428f-45d9-8a18-0c6225eb8e43",
        "title": {
            "text": "Moe's Southwest Grill"
        },
        "meta": [
            {
                "text": "40–55 min",
                "accessibilityText": "Delivered in 40 to 55 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.1",
            "accessibilityText": "Rated 4.1 out of 5 stars based on more than 1,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/moes-southwest-grill-3612-vestal-parkway-east/wuyX1kKPRdmKGAxiJeuOQw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4b297fccbb4d0b8b4acf590302a8875f/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                    "width": 1603,
                    "height": 1283
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4b297fccbb4d0b8b4acf590302a8875f/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4b297fccbb4d0b8b4acf590302a8875f/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4b297fccbb4d0b8b4acf590302a8875f/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4b297fccbb4d0b8b4acf590302a8875f/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4b297fccbb4d0b8b4acf590302a8875f/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "c2ec97d6-428f-45d9-8a18-0c6225eb8e43",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.00840799044817686,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.010723603773114156,
                        "HmooScorePreSCR": 0.014717879781499505,
                        "NetInflowPredictionScore": 25.418546676635742,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.014717879781499505,
                        "ServiceQualityPredictionScore": 0.8641563057899475,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.728610637694827,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.00840799044817686,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.022776953876018524,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 25.418546676635742,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.8641563057899475,
                        "t120d_eyeball_count": 5298,
                        "t120d_request_count": 700
                    },
                    "total": 0.010723603773114156
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 40,
                        "max": 55,
                        "raw": 50
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.10549872122762,
                    "ratingCount": "1,000+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 42.0963,
            "longitude": -75.9855,
            "zIndex": 9993,
            "description": {
                "title": "Moe's Southwest Grill",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.1",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },
    {
        "storeUuid": "23a1aeea-e610-4e37-a311-2d681d1761ce",
        "title": {
            "text": "Sonic"
        },
        "meta": [
            {
                "text": "30–45 min",
                "accessibilityText": "Delivered in 30 to 45 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.5",
            "accessibilityText": "Rated 4.5 out of 5 stars based on more than 1,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/sonic-1103-upper-front-st/I6Gu6uYQTjejES1oHRdhzg",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/582bedec2f8fcfbaa3c6ba8689533e00/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/582bedec2f8fcfbaa3c6ba8689533e00/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/582bedec2f8fcfbaa3c6ba8689533e00/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/582bedec2f8fcfbaa3c6ba8689533e00/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/582bedec2f8fcfbaa3c6ba8689533e00/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/582bedec2f8fcfbaa3c6ba8689533e00/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "23a1aeea-e610-4e37-a311-2d681d1761ce",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.007867404259741306,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.010597482532770668,
                        "HmooScorePreSCR": 0.013865652123466134,
                        "NetInflowPredictionScore": 26.852359771728516,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.013865652123466134,
                        "ServiceQualityPredictionScore": 0.8894472122192383,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7642974479963738,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.007867404259741306,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.022583452984690666,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 26.852359771728516,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.8894472122192383,
                        "t120d_eyeball_count": 8817,
                        "t120d_request_count": 1135
                    },
                    "total": 0.010597482532770668
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 30,
                        "max": 45,
                        "raw": 40
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.46930779277318,
                    "ratingCount": "1,000+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN"
            }
        },
        "mapMarker": {
            "latitude": 42.1469,
            "longitude": -75.9019,
            "zIndex": 9992,
            "description": {
                "title": "Sonic",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.5",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },
    {
        "storeUuid": "526f8564-c877-493c-a568-9bef1befb745",
        "title": {
            "text": "Burger King"
        },
        "meta": [
            {
                "text": "25–40 min",
                "accessibilityText": "Delivered in 25 to 40 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.5",
            "accessibilityText": "Rated 4.5 out of 5 stars based on more than 1,500 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/burger-king-290-main-street/Um-FZMh3STylaJvvG--3RQ",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/be274f7e3824094d842daed9d885cb7c/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/be274f7e3824094d842daed9d885cb7c/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/be274f7e3824094d842daed9d885cb7c/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/be274f7e3824094d842daed9d885cb7c/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/be274f7e3824094d842daed9d885cb7c/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/be274f7e3824094d842daed9d885cb7c/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "526f8564-c877-493c-a568-9bef1befb745",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.007762743625789881,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.010434477408096332,
                        "HmooScorePreSCR": 0.013721526800654828,
                        "NetInflowPredictionScore": 24.14621925354004,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.013721526800654828,
                        "ServiceQualityPredictionScore": 0.8385046124458313,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7604457987574947,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.007762743625789881,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.022828029468655586,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 24.14621925354004,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.8385046124458313,
                        "t120d_eyeball_count": 4522,
                        "t120d_request_count": 400
                    },
                    "total": 0.010434477408096332
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 25,
                        "max": 40,
                        "raw": 35
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.488383838383834,
                    "ratingCount": "1,500+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 42.1092,
            "longitude": -75.9405,
            "zIndex": 9991,
            "description": {
                "title": "Burger King",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.5",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },
    {
        "storeUuid": "cfaf2520-9c52-48ce-beb2-3253175435e8",
        "title": {
            "text": "KFC"
        },
        "meta": [
            {
                "text": "25–40 min",
                "accessibilityText": "Delivered in 25 to 40 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.2",
            "accessibilityText": "Rated 4.2 out of 5 stars based on more than 600 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/kfc-237-main-street/z68lIJxSSM6-sjJTF1Q16A",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ee43d451be97286e90c57c5105ef77d8/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ee43d451be97286e90c57c5105ef77d8/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ee43d451be97286e90c57c5105ef77d8/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ee43d451be97286e90c57c5105ef77d8/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ee43d451be97286e90c57c5105ef77d8/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ee43d451be97286e90c57c5105ef77d8/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "cfaf2520-9c52-48ce-beb2-3253175435e8",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.007260114420205355,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.009959681860104232,
                        "HmooScorePreSCR": 0.01289487600978464,
                        "NetInflowPredictionScore": 26.222997665405273,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.01289487600978464,
                        "ServiceQualityPredictionScore": 0.8703619837760925,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7723751552590983,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.007260114420205355,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.02218511700630188,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 26.222997665405273,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.8703619837760925,
                        "t120d_eyeball_count": 3377,
                        "t120d_request_count": 233
                    },
                    "total": 0.009959681860104232
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 25,
                        "max": 40,
                        "raw": 35
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.220264317180618,
                    "ratingCount": "600+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 42.1065,
            "longitude": -75.9366,
            "zIndex": 9990,
            "description": {
                "title": "KFC",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.2",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },
    {
        "storeUuid": "a94ae9e7-eb15-4d14-ba13-b0f46318ac98",
        "title": {
            "text": "Applebee's"
        },
        "meta": [
            {
                "text": "35–50 min",
                "accessibilityText": "Delivered in 35 to 50 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.4",
            "accessibilityText": "Rated 4.4 out of 5 stars based on more than 800 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/applebees-front-street/qUrp5-sVTRS6E7D0YxismA",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7171b0e708db110eb45088083566e7d3/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7171b0e708db110eb45088083566e7d3/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7171b0e708db110eb45088083566e7d3/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7171b0e708db110eb45088083566e7d3/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7171b0e708db110eb45088083566e7d3/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7171b0e708db110eb45088083566e7d3/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "a94ae9e7-eb15-4d14-ba13-b0f46318ac98",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.007173080928623676,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.009711001036241697,
                        "HmooScorePreSCR": 0.012854176694527267,
                        "NetInflowPredictionScore": 38.051727294921875,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.012854176694527267,
                        "ServiceQualityPredictionScore": 0.9106809496879578,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7554743696946539,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.007173080928623676,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.023458125069737434,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 38.051727294921875,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9106809496879578,
                        "t120d_eyeball_count": 5382,
                        "t120d_request_count": 491
                    },
                    "total": 0.009711001036241697
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 35,
                        "max": 50,
                        "raw": 45
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.377327935222673,
                    "ratingCount": "800+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN"
            }
        },
        "mapMarker": {
            "latitude": 42.1297,
            "longitude": -75.9053,
            "zIndex": 9989,
            "description": {
                "title": "Applebee's",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.4",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },
    {
        "storeUuid": "060cd857-56f6-4eee-a497-89195d13bea8",
        "title": {
            "text": "Pizza Hut"
        },
        "meta": [
            {
                "text": "40–55 min",
                "accessibilityText": "Delivered in 40 to 55 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.5",
            "accessibilityText": "Rated 4.5 out of 5 stars based on more than 1,500 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/pizza-hut-218-reynolds-rd/BgzYV1b2Tu6kl4kZXRO-qA",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/8e42f0ba1d0f35a331e93a147fa4eb36/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2748,
                    "height": 2199
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/8e42f0ba1d0f35a331e93a147fa4eb36/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/8e42f0ba1d0f35a331e93a147fa4eb36/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/8e42f0ba1d0f35a331e93a147fa4eb36/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/8e42f0ba1d0f35a331e93a147fa4eb36/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/8e42f0ba1d0f35a331e93a147fa4eb36/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "060cd857-56f6-4eee-a497-89195d13bea8",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.007298205979168415,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.009303061280087848,
                        "HmooScorePreSCR": 0.012999508200213315,
                        "NetInflowPredictionScore": 35.87703323364258,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.012999508200213315,
                        "ServiceQualityPredictionScore": 0.9068856835365295,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7156471719395654,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.007298205979168415,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.022801201790571213,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 35.87703323364258,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9068856835365295,
                        "t120d_eyeball_count": 10480,
                        "t120d_request_count": 942
                    },
                    "total": 0.009303061280087848
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 40,
                        "max": 55,
                        "raw": 50
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.485992691839212,
                    "ratingCount": "1,500+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN"
            }
        },
        "mapMarker": {
            "latitude": 42.126,
            "longitude": -75.9712,
            "zIndex": 9988,
            "description": {
                "title": "Pizza Hut",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.5",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },
    {
        "storeUuid": "493a75b6-938e-4035-97a6-eb001e2b8197",
        "title": {
            "text": "Papa Johns Pizza"
        },
        "meta": [
            {
                "text": "40–55 min",
                "accessibilityText": "Delivered in 40 to 55 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on more than 1,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/papa-johns-pizza-589-harry-l-drive/STp1tpOOQDWXpusAHiuBlw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5ea51a53247f3cba509ccb665b88fc/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 1603,
                    "height": 1283
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5ea51a53247f3cba509ccb665b88fc/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5ea51a53247f3cba509ccb665b88fc/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5ea51a53247f3cba509ccb665b88fc/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5ea51a53247f3cba509ccb665b88fc/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5ea51a53247f3cba509ccb665b88fc/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "493a75b6-938e-4035-97a6-eb001e2b8197",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.007150943391025066,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.008920340728653582,
                        "HmooScorePreSCR": 0.012881806479766965,
                        "NetInflowPredictionScore": 29.80295181274414,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.012881806479766965,
                        "ServiceQualityPredictionScore": 0.8758135437965393,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.6924759149785763,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.007150943391025066,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.02429519221186638,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 29.80295181274414,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.8758135437965393,
                        "t120d_eyeball_count": 9685,
                        "t120d_request_count": 1018
                    },
                    "total": 0.008920340728653582
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 40,
                        "max": 55,
                        "raw": 50
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.274030801911838,
                    "ratingCount": "1,000+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN"
            }
        },
        "mapMarker": {
            "latitude": 42.1249,
            "longitude": -75.9711,
            "zIndex": 9987,
            "description": {
                "title": "Papa Johns Pizza",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },
    {
        "storeUuid": "0b7bff92-5de9-4e60-b370-fd4f0b395ea8",
        "title": {
            "text": "Subway"
        },
        "meta": [
            {
                "text": "20–35 min",
                "accessibilityText": "Delivered in 20 to 35 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.7",
            "accessibilityText": "A top rated restaurant with 4.7 out of 5 stars based on more than 340 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/subway-187-main-st/C3v_kl3pTmCzcP1PCzleqA",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/11b5f6d16bd31e86efefa4c266b56071/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/11b5f6d16bd31e86efefa4c266b56071/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/11b5f6d16bd31e86efefa4c266b56071/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/11b5f6d16bd31e86efefa4c266b56071/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/11b5f6d16bd31e86efefa4c266b56071/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/11b5f6d16bd31e86efefa4c266b56071/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "0b7bff92-5de9-4e60-b370-fd4f0b395ea8",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.005764407105743885,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.008494338516897189,
                        "HmooScorePreSCR": 0.010229960998520256,
                        "NetInflowPredictionScore": 20.09967803955078,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.010229960998520256,
                        "ServiceQualityPredictionScore": 0.9018857479095459,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.8303392865452642,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.005764407105743885,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.01750175654888153,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 20.09967803955078,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9018857479095459,
                        "t120d_eyeball_count": 2089,
                        "t120d_request_count": 101
                    },
                    "total": 0.008494338516897189
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 20,
                        "max": 35,
                        "raw": 30
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.668181818181818,
                    "ratingCount": "340+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN"
            }
        },
        "mapMarker": {
            "latitude": 42.1039,
            "longitude": -75.9321,
            "zIndex": 9986,
            "description": {
                "title": "Subway",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.7",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },
    {
        "storeUuid": "63895227-ce6c-438e-8e2f-4dd2a935aa32",
        "title": {
            "text": "Jersey Mike's"
        },
        "meta": [
            {
                "text": "35–50 min",
                "accessibilityText": "Delivered in 35 to 50 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.6",
            "accessibilityText": "A top rated restaurant with 4.6 out of 5 stars based on more than 310 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/jersey-mikes-4700-vestal-parkway-east-suite-13/Y4lSJ85sQ46OL03SqTWqMg",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2da682494d2b7bb116666be8b4501538/fb86662148be855d931b37d6c1e5fcbe.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2da682494d2b7bb116666be8b4501538/783282f6131ef2258e5bcd87c46aa87e.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2da682494d2b7bb116666be8b4501538/8a42ee7a692dfa4155879820804a277f.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2da682494d2b7bb116666be8b4501538/fdf52d66534809b650058f41d517d74a.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2da682494d2b7bb116666be8b4501538/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2da682494d2b7bb116666be8b4501538/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "63895227-ce6c-438e-8e2f-4dd2a935aa32",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.006896149832755327,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.008287740262406189,
                        "HmooScorePreSCR": 0.011953935536555946,
                        "NetInflowPredictionScore": 23.291318893432617,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.011953935536555946,
                        "ServiceQualityPredictionScore": 0.9225572943687439,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.6933064208905692,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.006896149832755327,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.017093287780880928,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 23.291318893432617,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9225572943687439,
                        "t120d_eyeball_count": 3955,
                        "t120d_request_count": 424
                    },
                    "total": 0.008287740262406189
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 35,
                        "max": 50,
                        "raw": 45
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.634892086330936,
                    "ratingCount": "310+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN"
            }
        },
        "mapMarker": {
            "latitude": 42.092,
            "longitude": -75.9524,
            "zIndex": 9985,
            "description": {
                "title": "Jersey Mike's",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.6",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },
    {
        "storeUuid": "e9a3f29d-7b43-4e7f-ad60-09efa3dd5a63",
        "title": {
            "text": "Panera"
        },
        "meta": [
            {
                "text": "35–50 min",
                "accessibilityText": "Delivered in 35 to 50 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.6",
            "accessibilityText": "A top rated restaurant with 4.6 out of 5 stars based on more than 2,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/panera-3700-vestal-parkway-e/6aPynXtDTn-tYAnvo91aYw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/282e4069ca3ec22ec7201bc4a51f0695/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/282e4069ca3ec22ec7201bc4a51f0695/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/282e4069ca3ec22ec7201bc4a51f0695/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/282e4069ca3ec22ec7201bc4a51f0695/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/282e4069ca3ec22ec7201bc4a51f0695/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/282e4069ca3ec22ec7201bc4a51f0695/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "text": "Free Item (Spend $30)",
                "textColor": {
                    "color": "#FFFFFF"
                }
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "e9a3f29d-7b43-4e7f-ad60-09efa3dd5a63",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.005264666397124529,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.007579517679793429,
                        "HmooScorePreSCR": 0.009286783241666853,
                        "NetInflowPredictionScore": 32.12538528442383,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.009286783241666853,
                        "ServiceQualityPredictionScore": 0.9153640866279602,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.8161617949460191,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.005264666397124529,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.015223653055727482,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 32.12538528442383,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9153640866279602,
                        "t120d_eyeball_count": 3995,
                        "t120d_request_count": 567
                    },
                    "total": 0.007579517679793429
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 35,
                        "max": 50,
                        "raw": 45
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.599467478128563,
                    "ratingCount": "2,000+"
                },
                "promotionUUID": "2431dae4-a8b1-494b-be83-30c51f072edf",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN",
                "offerMetadata": {
                    "analyticsUUID": "8bdc90d2-26e7-4649-a6c1-43cf071151bf",
                    "promotionUUIDs": [
                        "2431dae4-a8b1-494b-be83-30c51f072edf"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "promo.restaurant.free_item_with_min_basket"
                }
            }
        },
        "mapMarker": {
            "latitude": 42.0961,
            "longitude": -75.9844,
            "zIndex": 9984,
            "description": {
                "title": "Panera",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.6",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },
    {
        "storeUuid": "8d359765-bee9-4c64-9985-2915b708f3fb",
        "title": {
            "text": "Outback Steakhouse"
        },
        "meta": [
            {
                "text": "55–70 min",
                "accessibilityText": "Delivered in 55 to 70 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on more than 1,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/outback-steakhouse-3140-vestal-parkway-east/jTWXZb7pTGSZhSkVtwjz-w",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/06684106d6a64649a321d3baea84bf53/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/06684106d6a64649a321d3baea84bf53/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/06684106d6a64649a321d3baea84bf53/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/06684106d6a64649a321d3baea84bf53/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/06684106d6a64649a321d3baea84bf53/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/06684106d6a64649a321d3baea84bf53/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
                "text": " Top Offer • Spend $25, Save $5",
                "textColor": {
                    "color": "#FFFFFF"
                },
                "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • Spend $25, Save $5</span>"
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "8d359765-bee9-4c64-9985-2915b708f3fb",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.004309043753892183,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.005720785992386067,
                        "HmooScorePreSCR": 0.007674973259679974,
                        "NetInflowPredictionScore": 49.06652069091797,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.007674973259679974,
                        "ServiceQualityPredictionScore": 0.9399415254592896,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7453818793662623,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.004309043753892183,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.0134588573127985,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 49.06652069091797,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9399415254592896,
                        "t120d_eyeball_count": 7517,
                        "t120d_request_count": 369
                    },
                    "total": 0.005720785992386067
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 55,
                        "max": 70,
                        "raw": 65
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.32225237449118,
                    "ratingCount": "1,000+"
                },
                "promotionUUID": "7bc2fad0-cf8c-43dc-8591-d41c448c9d35",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "414996b8-29d1-49f9-af4a-ed3a6f1fd25f",
                    "promotionUUIDs": [
                        "7bc2fad0-cf8c-43dc-8591-d41c448c9d35"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "offer_quality.top_offer,store_promotion_badge"
                }
            }
        },
        "mapMarker": {
            "latitude": 42.0954,
            "longitude": -75.9998,
            "zIndex": 9983,
            "description": {
                "title": "Outback Steakhouse",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },
    {
        "storeUuid": "d8022b56-ab31-4f23-8221-ee6e36fe99df",
        "title": {
            "text": "IHOP"
        },
        "meta": [
            {
                "text": "40–55 min",
                "accessibilityText": "Delivered in 40 to 55 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.4",
            "accessibilityText": "Rated 4.4 out of 5 stars based on more than 1,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/ihop-vestal-parkway-east/2AIrVqsxTyOCIe5uNv6Z3w",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1dfdc7535d817f00f1b4316c8dc7614d/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 1603,
                    "height": 1283
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1dfdc7535d817f00f1b4316c8dc7614d/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1dfdc7535d817f00f1b4316c8dc7614d/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1dfdc7535d817f00f1b4316c8dc7614d/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1dfdc7535d817f00f1b4316c8dc7614d/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1dfdc7535d817f00f1b4316c8dc7614d/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
                "text": " Top Offer • 2 Offers Available",
                "textColor": {
                    "color": "#FFFFFF"
                },
                "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • 2 Offers Available</span>"
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "d8022b56-ab31-4f23-8221-ee6e36fe99df",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.00454955268651247,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.005200988174304345,
                        "HmooScorePreSCR": 0.008065729338675737,
                        "NetInflowPredictionScore": 42.212242126464844,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.008065729338675737,
                        "ServiceQualityPredictionScore": 0.9171313643455505,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.6448255273537685,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.00454955268651247,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.013701657764613628,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 42.212242126464844,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9171313643455505,
                        "t120d_eyeball_count": 7988,
                        "t120d_request_count": 583
                    },
                    "total": 0.005200988174304345
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 40,
                        "max": 55,
                        "raw": 50
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.374211632796073,
                    "ratingCount": "1,000+"
                },
                "promotionUUID": "fdcfede2-edb7-4bac-8200-1d056a989a48",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "95f59926-a7eb-478e-93eb-91f71957c268",
                    "promotionUUIDs": [
                        "fdcfede2-edb7-4bac-8200-1d056a989a48",
                        "7939b357-3640-4aa4-aec0-d28938b9eb4e"
                    ],
                    "offerTypeCount": 2,
                    "concatSignpost": "offer_quality.top_offer,concurrent_offer.signpost.num.of.offers.available"
                }
            }
        },
        "mapMarker": {
            "latitude": 42.0959,
            "longitude": -75.9824,
            "zIndex": 9982,
            "description": {
                "title": "IHOP",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.4",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },
    {
        "storeUuid": "541c15fb-c9e3-5187-aa0e-0f5f5df98d75",
        "title": {
            "text": "Chili's Grill & Bar"
        },
        "meta": [
            {
                "text": "50–65 min",
                "accessibilityText": "Delivered in 50 to 65 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on more than 430 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/chilis-grill-%26-bar-2553-vestal-parkway/VBwV-8njUYeqDg9fXfmNdQ",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/82ab194a93b232cd82a60c7a54ceaa92/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/82ab194a93b232cd82a60c7a54ceaa92/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/82ab194a93b232cd82a60c7a54ceaa92/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/82ab194a93b232cd82a60c7a54ceaa92/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/82ab194a93b232cd82a60c7a54ceaa92/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/82ab194a93b232cd82a60c7a54ceaa92/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "recommendationFeedPlugin",
                "analyticsLabel": "national_favorites",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED",
                "additionalTrackingData": {
                    "delivery_fee": "1.49",
                    "tracingID": "2ecfb896-9f74-4da1-bbdd-9beefeedf3ef"
                }
            },
            "storePayload": {
                "storeUUID": "541c15fb-c9e3-5187-aa0e-0f5f5df98d75",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRatePredictionScore": 0.0035680686123669147,
                        "ConversionRateScoreCoefficient": 1.55,
                        "FinalScore": 0.005071433297735474,
                        "HmooScorePreSCR": 0.006457042266614735,
                        "NetInflowPredictionScore": 38.9215087890625,
                        "NetInflowScoreCoefficient": 0,
                        "PredictionScore": 0.006457042266614735,
                        "ServiceQualityPredictionScore": 0.9087072014808655,
                        "ServiceQualityScoreCoefficient": 0,
                        "StoreCarouselRelevanceFactor": 1,
                        "StoreCarouselRelevanceScore": 0.7854111973150051,
                        "conversion_rate_boosting_factor": 1.55,
                        "conversion_rate_partial_score": 0.0035680686123669147,
                        "ctr_boosting_factor": 0.074,
                        "ctr_partial_score": 0.012520755641162395,
                        "net_inflow_boosting_factor": 0,
                        "net_inflow_partial_score": 38.9215087890625,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9087072014808655,
                        "t120d_eyeball_count": 5427,
                        "t120d_request_count": 514
                    },
                    "total": 0.005071433297735474
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 50,
                        "max": 65,
                        "raw": 60
                    }
                },
                "ratingInfo": {
                    "storeRatingScore": 4.319205298013245,
                    "ratingCount": "430+"
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN"
            }
        },
        "mapMarker": {
            "latitude": 42.0958,
            "longitude": -76.005,
            "zIndex": 9981,
            "description": {
                "title": "Chili's Grill & Bar",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    }
];
const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="card-container">
            <img className="mcd-img" src={resData.image.items[0].url} />
            <div className="res-text">
                <h3>{resData?.title?.text}</h3>
                <h5>{resData?.rating?.accessibilityText}</h5>
                <h5>{resData?.rating?.text}</h5>
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body-container">
            {/* <div className="Banner">
                <img className="Banner" src="https://www.shutterstock.com/shutterstock/photos/2252477835/display_1500/stock-photo-healthy-breakfast-food-table-scene-top-down-view-over-a-white-wood-banner-background-omelette-2252477835.jpg" />

            </div> */}
            <div className="search">
                <h4>Search your Favourite restaurants</h4>
            </div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.storeUuid} resData={restaurant} /> //storeUid is given in the data
                ))}
            </div>
        </div>
    )
}


// this is the Layout where everything else will go 
// it is a component which is a normal function in js, returns a JSX object
const AppLayout = () => {
    return (
        <div className="app">
            {<Header></Header>}
            {<Body></Body>}


        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);