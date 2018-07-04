/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
     //var invokeUrl = 'https://ek8gzfe352.execute-api.us-east-2.amazonaws.com/Develop';
     var invokeUrl = 'http://localhost:8100/api-rest';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.rootGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['TableName'], ['body']);
        
        var rootGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['TableName']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(rootGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.rootOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var rootOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(rootOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultarestexternoPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultarestexternoPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/consultarestexterno').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultarestexternoPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosAhorrosPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var consultasaldosAhorrosPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/ahorros').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosAhorrosPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosAhorrosDetallePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosAhorrosDetallePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/ahorros/detalle').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosAhorrosDetallePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosAportacionesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosAportacionesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/aportaciones').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosAportacionesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosAportacionesDetalleOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosAportacionesDetalleOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/aportaciones/detalle').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosAportacionesDetalleOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosDepositosplazofijoOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosDepositosplazofijoOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/depositosplazofijo').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosDepositosplazofijoOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosDepositosplazofijoDetalleOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosDepositosplazofijoDetalleOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/depositosplazofijo/detalle').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosDepositosplazofijoDetalleOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosPrestamosOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosPrestamosOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/prestamos').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosPrestamosOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.manejocuentasOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var manejocuentasOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/manejocuentas').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(manejocuentasOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.manejocuentasAperturaplazofijoOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var manejocuentasAperturaplazofijoOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/manejocuentas/aperturaplazofijo').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(manejocuentasAperturaplazofijoOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.manejocuentasAperturaplazofijoRealizaoperacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var manejocuentasAperturaplazofijoRealizaoperacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/manejocuentas/aperturaplazofijo/realizaoperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(manejocuentasAperturaplazofijoRealizaoperacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.manejocuentasAperturaplazofijoVerificacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var manejocuentasAperturaplazofijoVerificacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/manejocuentas/aperturaplazofijo/verificacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(manejocuentasAperturaplazofijoVerificacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pagosAportacionesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var pagosAportacionesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pagos/aportaciones').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pagosAportacionesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pagosAportacionesRealizaroperacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var pagosAportacionesRealizaroperacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pagos/aportaciones/realizaroperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pagosAportacionesRealizaroperacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pagosAportacionesVerificacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var pagosAportacionesVerificacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pagos/aportaciones/verificacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pagosAportacionesVerificacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pagosPrestamosOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var pagosPrestamosOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pagos/prestamos').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pagosPrestamosOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pagosPrestamosRealizaoperacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var pagosPrestamosRealizaoperacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pagos/prestamos/realizaoperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pagosPrestamosRealizaoperacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pagosPrestamosVerificacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var pagosPrestamosVerificacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pagos/prestamos/verificacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pagosPrestamosVerificacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasDesdebancosOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasDesdebancosOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/desdebancos').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasDesdebancosOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasDesdebancosRealizaoperacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasDesdebancosRealizaoperacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/desdebancos/realizaoperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasDesdebancosRealizaoperacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasDesdebancosVerificacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasDesdebancosVerificacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/desdebancos/verificacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasDesdebancosVerificacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaDiferidaEntrecuentasRealizaoperacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaDiferidaEntrecuentasRealizaoperacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/diferida/entrecuentas/realizaoperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaDiferidaEntrecuentasRealizaoperacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaDiferidaEntrecuentasRealizaoperacionVerificacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaDiferidaEntrecuentasRealizaoperacionVerificacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/diferida/entrecuentas/realizaoperacion/verificacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaDiferidaEntrecuentasRealizaoperacionVerificacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaDiferidaOtrascuentasRealizaoperacionPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaDiferidaOtrascuentasRealizaoperacionPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/diferida/otrascuentas/realizaoperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaDiferidaOtrascuentasRealizaoperacionPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaInmediataOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaInmediataOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/inmediata').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaInmediataOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaInmediataEntrecuentasOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaInmediataEntrecuentasOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/inmediata/entrecuentas').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaInmediataEntrecuentasOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaInmediataEntrecuentasRealizaoperacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaInmediataEntrecuentasRealizaoperacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/inmediata/entrecuentas/realizaoperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaInmediataEntrecuentasRealizaoperacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaInmediataEntrecuentasVerificacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaInmediataEntrecuentasVerificacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/inmediata/entrecuentas/verificacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaInmediataEntrecuentasVerificacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaInmediataOtrascuentasOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaInmediataOtrascuentasOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/inmediata/otrascuentas').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaInmediataOtrascuentasOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaInmediataOtrascuentasRealizaoperacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaInmediataOtrascuentasRealizaoperacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/inmediata/otrascuentas/realizaoperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaInmediataOtrascuentasRealizaoperacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaInmediataOtrascuentasVerificacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaInmediataOtrascuentasVerificacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/inmediata/otrascuentas/verificacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaInmediataOtrascuentasVerificacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasMismobancoOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasMismobancoOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/mismobanco').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasMismobancoOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasMismobancoEntrecuentasOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasMismobancoEntrecuentasOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/mismobanco/entrecuentas').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasMismobancoEntrecuentasOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasMismobancoEntrecuentasRealizaoperacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasMismobancoEntrecuentasRealizaoperacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/mismobanco/entrecuentas/realizaoperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasMismobancoEntrecuentasRealizaoperacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasMismobancoEntrecuentasVerificacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasMismobancoEntrecuentasVerificacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/mismobanco/entrecuentas/verificacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasMismobancoEntrecuentasVerificacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
