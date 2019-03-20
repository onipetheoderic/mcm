var mongoose = require('mongoose');
var pageSettingSchema = new mongoose.Schema({
    sitename: {type: String, default:"colofy" },
    product_listing : {type: String, default:"New Arrivals" },
    home : {type: String, default:false },   
    top_text: {type: String, default: "free shipping on all u.s orders over $50"},
    show_deal_of_week: {type: Boolean, dafault: true},
    best_seller_text: {type: String, default: "Best Sellers"},
    show_best_sellers: {type: Boolean, default: true},
    show_news_seller: {type: Boolean, default: true},
    newsletter_description: {type: String, default: "Subscribe to our newsletter and get 20% off your first purchase"},
    
    enable_free_shipping: {type: Boolean, default: true},
    free_shipping: {type: String, default: "FREE SHIPPING"},
    free_shipping_description: {type: String, default: "Suffered Alteration in Some Form"},

    enable_cash_on_delivery: {type: Boolean, default: true},
    cash_on_delivery: {type: String, default: "CASH ON DELIVERY"},
    cash_on_delivery_description: {type: String, default: "Confirm your goods before buying"},

    enable_days_return: {type: Boolean, default: true},
    days_return: {type: String, default: "45 DAYS RETURN"},
    days_return_description: {type: String, default: "less than 45 days return"},

    enable_open_all_week: {type: Boolean, default: true},
    open_all_week: {type: String, default: "OPENING ALL WEEK"},
    open_all_week_description: {type: String, default: "8AM - 9PM"},



},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('PageSetting', pageSettingSchema);