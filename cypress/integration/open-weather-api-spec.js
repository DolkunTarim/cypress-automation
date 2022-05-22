
describe('Open Weather Map API', () => {
    context('GET /data/2.5/weather', () => {
        it('should return the weather forecast data for a city and country code', () => {
            let cityName='London';
            let countryCode='uk';
            cy.request({
                method: 'GET',
                url: Cypress.config("weather-api-base-url")+"/data/2.5/weather?q="+cityName+","+countryCode+"&appid="+Cypress.config("weather-api-key")
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.body).to.have.all.keys('base','clouds','cod','coord','dt','id','main','name','sys','timezone','visibility','weather','wind')
                    expect(response.body.name).to.eq(cityName)
                });
        });
    });
});