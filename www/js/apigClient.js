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
       //var invokeUrl = 'https://c550icozi9.execute-api.us-east-2.amazonaws.com/Develop';
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
    
    
    apigClient.consultarestexternoOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultarestexternoOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/consultarestexterno').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultarestexternoOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosAhorrosPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosAhorrosPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/ahorros').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosAhorrosPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.consultasaldosAhorrosOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosAhorrosOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/ahorros').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosAhorrosOptionsRequest, authType, additionalParams, config.apiKey);
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
    
    
    apigClient.consultasaldosAhorrosDetalleOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var consultasaldosAhorrosDetalleOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/consultasaldos/ahorros/detalle').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(consultasaldosAhorrosDetalleOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaDiferidaOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaDiferidaOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/diferida').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaDiferidaOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaDiferidaEntrecuentasOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaDiferidaEntrecuentasOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/diferida/entrecuentas').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaDiferidaEntrecuentasOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaDiferidaOtrascuentasOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaDiferidaOtrascuentasOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/diferida/otrascuentas').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaDiferidaOtrascuentasOptionsRequest, authType, additionalParams, config.apiKey);
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
    
    
    apigClient.transferenciasInterbancariaDiferidaOtrascuentasRealizaoperacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaDiferidaOtrascuentasRealizaoperacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/diferida/otrascuentas/realizaoperacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaDiferidaOtrascuentasRealizaoperacionOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.transferenciasInterbancariaDiferidaOtrascuentasVerificacionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var transferenciasInterbancariaDiferidaOtrascuentasVerificacionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/transferencias/interbancaria/diferida/otrascuentas/verificacion').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(transferenciasInterbancariaDiferidaOtrascuentasVerificacionOptionsRequest, authType, additionalParams, config.apiKey);
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
    

    return apigClient;
};
