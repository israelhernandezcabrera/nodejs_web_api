module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product created successfully',
        PRODUCT_FETCHED: 'Product fetched successfully',
        PRODUCT_UPDATED: 'Product updated successfully',
        PRODUCT_NOT_FOUND: 'Product not found',
        PRODUCT_DELETED: 'Product deleted successfully'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'signup Success',
        LOGIN_SUCCESS: 'Login success',
        DUPLICATE_EMAIL: 'User already exist with given email',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Invalid password'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields',
        TOKEN_MISSING: 'Token missing from header'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}