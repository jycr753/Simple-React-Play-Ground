/**
 * Created by jycr753 on 7/26/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/AppConstants');

// Define actions object
var FluxCartActions = {

    // Receive inital product data
    receiveProduct: function(data) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.RECEIVE_DATA,
            data: data
        })
    },

    receivePerson: function(data){
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.RECEIVE_PERSON,
            data: data
        })
    },

    // Set currently selected product variation
    selectProduct: function(index) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.SELECT_PRODUCT,
            data: index
        })
    },

    // Add item to cart
    addToCart: function(sku, update) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.CART_ADD,
            sku: sku,
            update: update
        })
    },

    // Remove item from cart
    removeFromCart: function(sku) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.CART_REMOVE,
            sku: sku
        })
    },

    // Update cart visibility status
    updateCartVisible: function(cartVisible) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.CART_VISIBLE,
            cartVisible: cartVisible
        })
    }

};

module.exports = FluxCartActions;