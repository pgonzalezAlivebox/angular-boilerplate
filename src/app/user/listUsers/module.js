/**
 * Created with JetBrains PhpStorm.
 * User: Karenina
 * Date: 19/02/14
 * Time: 03:10 PM
 * To change this template use File | Settings | File Templates.
 */
define(['angular', 'placeholders'], function (ng) {
    'use strict';
    return ng.module('app.user.listUsers',
        [
            'app.user.listUsers.partials',
            'ui.router',
            'plusOne',
            'placeholders'
        ]);
});