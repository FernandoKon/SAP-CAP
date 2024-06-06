const cds = require('@sap/cds')

module.exports = async (srv) =>  {

    const sord = await cds.connect.to('API_SALES_ORDER_SRV')
    
    srv.on('READ', 'A_SalesOrder', (req) => {
        const data = sord.transaction(req).send({
            query: req.query,
            headers: {
                apikey: 'zWQwNxvKLV49YfReqbph57nQqKwmZtr2'
            }
        });
        return data;
    });

    
}