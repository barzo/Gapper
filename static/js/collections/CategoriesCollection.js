// Category Collection
// ===================

// Includes file dependencies
define([ "jquery","backbone","models/CategoryModel" ], function( $, Backbone, CategoryModel ) {

    // Extends Backbone.Router
    var Collection = Backbone.Collection.extend( {

        // The Collection constructor
        initialize: function( models, options ) {

            // Sets the type instance property (ie. animals)
            this.type = options.type;

        },

        // Sets the Collection model property to be a Category Model
        model: CategoryModel,

        // Sample JSON data that in a real app will most likely come from a REST web service
        jsonArray: [

            { "category": "animals", "type": "Pets" },
            { "category": "animals", "type": "Farm Animals" },
            { "category": "animals", "type": "Wild Animals" },
            { "category": "colors", "type": "Blue" },
            { "category": "colors", "type": "Green" },
            { "category": "colors", "type": "Orange" },
            { "category": "colors", "type": "Purple" },
            { "category": "colors", "type": "Red" },
            { "category": "colors", "type": "Yellow" },
            { "category": "colors", "type": "Violet" },
            { "category": "vehicles", "type": "Acura" },
            { "category": "vehicles", "type": "Aeon" },
            { "category": "vehicles", "type": "Airforce" },
            { "category": "vehicles", "type": "Aleko" },
            { "category": "vehicles", "type": "Alfa Romeo" },
            { "category": "vehicles", "type": "Alimdorse" },
            { "category": "vehicles", "type": "AMC" },
            { "category": "vehicles", "type": "Anadol" },
            { "category": "vehicles", "type": "Antonio" },
            { "category": "vehicles", "type": "Apachi" },
            { "category": "vehicles", "type": "Aprilia" },
            { "category": "vehicles", "type": "Armode" },
            { "category": "vehicles", "type": "Arora" },
            { "category": "vehicles", "type": "Artrak" },
            { "category": "vehicles", "type": "Askam" },
            { "category": "vehicles", "type": "Aston Martin" },
            { "category": "vehicles", "type": "Asya" },
            { "category": "vehicles", "type": "ATV" },
            { "category": "vehicles", "type": "Audi" },
            { "category": "vehicles", "type": "Austin" },
            { "category": "vehicles", "type": "Avcar Motors" },
            { "category": "vehicles", "type": "AY" },
            { "category": "vehicles", "type": "Aydeniz" },
            { "category": "vehicles", "type": "Başak" },
            { "category": "vehicles", "type": "Başkent Traktör" },
            { "category": "vehicles", "type": "Bedford" },
            { "category": "vehicles", "type": "Belderia" },
            { "category": "vehicles", "type": "Bentley" },
            { "category": "vehicles", "type": "Bianchi" },
            { "category": "vehicles", "type": "Biçerdöver" },
            { "category": "vehicles", "type": "Bimota" },
            { "category": "vehicles", "type": "Bisan" },
            { "category": "vehicles", "type": "BMC" },
            { "category": "vehicles", "type": "BMW" },
            { "category": "vehicles", "type": "Boatian" },
            { "category": "vehicles", "type": "Bombardier" },
            { "category": "vehicles", "type": "Bugatti" },
            { "category": "vehicles", "type": "Buick" },
            { "category": "vehicles", "type": "Bumoto" },
            { "category": "vehicles", "type": "Cadillac" },
            { "category": "vehicles", "type": "Case" },
            { "category": "vehicles", "type": "Case IH" },
            { "category": "vehicles", "type": "Celik" },
            { "category": "vehicles", "type": "Cezeta" },
            { "category": "vehicles", "type": "CFmoto" },
            { "category": "vehicles", "type": "Cheeta" },
            { "category": "vehicles", "type": "Chery" },
            { "category": "vehicles", "type": "Chevrolet" },
            { "category": "vehicles", "type": "Chopper" },
            { "category": "vehicles", "type": "Chrysler" },
            { "category": "vehicles", "type": "Citroen" },
            { "category": "vehicles", "type": "Claas" },
            { "category": "vehicles", "type": "Çelik" },
            { "category": "vehicles", "type": "Çiftlik Damper" },
            { "category": "vehicles", "type": "Çukurova" },
            { "category": "vehicles", "type": "Dacia" },
            { "category": "vehicles", "type": "Daelim" },
            { "category": "vehicles", "type": "Daewoo" },
            { "category": "vehicles", "type": "DAF" },
            { "category": "vehicles", "type": "Daihatsu" },
            { "category": "vehicles", "type": "Dayun" },
            { "category": "vehicles", "type": "Değişim Karoser" },
            { "category": "vehicles", "type": "Deutz-Fahr" },
            { "category": "vehicles", "type": "Dexta" },
            { "category": "vehicles", "type": "DFM" },
            { "category": "vehicles", "type": "Dodge" },
            { "category": "vehicles", "type": "Dorado" },
            { "category": "vehicles", "type": "Dorsan" },
            { "category": "vehicles", "type": "Dorse" },
            { "category": "vehicles", "type": "Ducati" },
            { "category": "vehicles", "type": "E-bike" },
            { "category": "vehicles", "type": "Eko bike" },
            { "category": "vehicles", "type": "Ekobis" },
            { "category": "vehicles", "type": "Ekol" },
            { "category": "vehicles", "type": "Emre Kasa" },
            { "category": "vehicles", "type": "Enter" },
            { "category": "vehicles", "type": "Erkunt" },
            { "category": "vehicles", "type": "Ertuğrullar" },
            { "category": "vehicles", "type": "E-scooter" },
            { "category": "vehicles", "type": "Excalibur" },
            { "category": "vehicles", "type": "Falcon" },
            { "category": "vehicles", "type": "Fargo" },
            { "category": "vehicles", "type": "Farmtrac" },
            { "category": "vehicles", "type": "Faw" },
            { "category": "vehicles", "type": "Fendt" },
            { "category": "vehicles", "type": "Ferrari" },
            { "category": "vehicles", "type": "Ferrari Tractors" },
            { "category": "vehicles", "type": "Fiat" },
            { "category": "vehicles", "type": "Ford" },
            { "category": "vehicles", "type": "Foton" },
            { "category": "vehicles", "type": "Fruehauf" },
            { "category": "vehicles", "type": "Fuxin" },
            { "category": "vehicles", "type": "GAZ" },
            { "category": "vehicles", "type": "Geely" },
            { "category": "vehicles", "type": "Gilera" },
            { "category": "vehicles", "type": "GMC" },
            { "category": "vehicles", "type": "Haojin" },
            { "category": "vehicles", "type": "Harley Davidson" },
            { "category": "vehicles", "type": "Hema" },
            { "category": "vehicles", "type": "Herk" },
            { "category": "vehicles", "type": "Hero" },
            { "category": "vehicles", "type": "HF Kanuni" },
            { "category": "vehicles", "type": "Hino" },
            { "category": "vehicles", "type": "Hitachi" },
            { "category": "vehicles", "type": "Honda" },
            { "category": "vehicles", "type": "Hummer" },
            { "category": "vehicles", "type": "Husaberg" },
            { "category": "vehicles", "type": "Husqvarna" },
            { "category": "vehicles", "type": "Hydromec" },
            { "category": "vehicles", "type": "Hyosung" },
            { "category": "vehicles", "type": "Hyundai" },
            { "category": "vehicles", "type": "Ikco" },
            { "category": "vehicles", "type": "Infiniti" },
            { "category": "vehicles", "type": "International" },
            { "category": "vehicles", "type": "Isuzu" },
            { "category": "vehicles", "type": "Italjet" },
            { "category": "vehicles", "type": "Iveco" },
            { "category": "vehicles", "type": "İşbora" },
            { "category": "vehicles", "type": "JAC" },
            { "category": "vehicles", "type": "Jaguar" },
            { "category": "vehicles", "type": "Jawa" },
            { "category": "vehicles", "type": "Jeep" },
            { "category": "vehicles", "type": "Jiajue" },
            { "category": "vehicles", "type": "Jinling" },
            { "category": "vehicles", "type": "Jinlun" },
            { "category": "vehicles", "type": "Johndere" },
            { "category": "vehicles", "type": "Kadirga" },
            { "category": "vehicles", "type": "Kangda" },
            { "category": "vehicles", "type": "Kanuni" },
            { "category": "vehicles", "type": "Kanuni-" },
            { "category": "vehicles", "type": "Karsan" },
            { "category": "vehicles", "type": "Katren" },
            { "category": "vehicles", "type": "Kawasaki" },
            { "category": "vehicles", "type": "Keeway" },
            { "category": "vehicles", "type": "Kia" },
            { "category": "vehicles", "type": "Kinetic" },
            { "category": "vehicles", "type": "Kinroad" },
            { "category": "vehicles", "type": "Kioti" },
            { "category": "vehicles", "type": "KMT" },
            { "category": "vehicles", "type": "Koçaslanlar" },
            { "category": "vehicles", "type": "Kögel" },
            { "category": "vehicles", "type": "Krone" },
            { "category": "vehicles", "type": "KTM" },
            { "category": "vehicles", "type": "Kuba" },
            { "category": "vehicles", "type": "Kubota" },
            { "category": "vehicles", "type": "Kuşçuoğlu" },
            { "category": "vehicles", "type": "Kymco" },
            { "category": "vehicles", "type": "Lada" },
            { "category": "vehicles", "type": "Lamborghini" },
            { "category": "vehicles", "type": "Lambretta" },
            { "category": "vehicles", "type": "Lancia" },
            { "category": "vehicles", "type": "Land Rover" },
            { "category": "vehicles", "type": "Landini" },
            { "category": "vehicles", "type": "Ledow" },
            { "category": "vehicles", "type": "Leyland Ttraktör" },
            { "category": "vehicles", "type": "LG" },
            { "category": "vehicles", "type": "Lider" },
            { "category": "vehicles", "type": "Liebherr" },
            { "category": "vehicles", "type": "Lifan-" },
            { "category": "vehicles", "type": "Lincoln" },
            { "category": "vehicles", "type": "LS Traktör" },
            { "category": "vehicles", "type": "Mahindra" },
            { "category": "vehicles", "type": "Makinsan" },
            { "category": "vehicles", "type": "MAN" },
            { "category": "vehicles", "type": "Maserati" },
            { "category": "vehicles", "type": "Massey Ferguson" },
            { "category": "vehicles", "type": "Mazda" },
            { "category": "vehicles", "type": "Mc Cormick" },
            { "category": "vehicles", "type": "McLaren" },
            { "category": "vehicles", "type": "Megelli" },
            { "category": "vehicles", "type": "Meiduo" },
            { "category": "vehicles", "type": "Mercedes" },
            { "category": "vehicles", "type": "Mercury" },
            { "category": "vehicles", "type": "Merve" },
            { "category": "vehicles", "type": "MINI" },
            { "category": "vehicles", "type": "Mitsubishi" },
            { "category": "vehicles", "type": "Mobylette" },
            { "category": "vehicles", "type": "Modenas" },
            { "category": "vehicles", "type": "Mondial" },
            { "category": "vehicles", "type": "Monero" },
            { "category": "vehicles", "type": "Morgan" },
            { "category": "vehicles", "type": "Moto Guzzi" },
            { "category": "vehicles", "type": "Motoran" },
            { "category": "vehicles", "type": "MV Agusta" },
            { "category": "vehicles", "type": "MZ" },
            { "category": "vehicles", "type": "Neoplan" },
            { "category": "vehicles", "type": "New Holland" },
            { "category": "vehicles", "type": "Nissan" },
            { "category": "vehicles", "type": "O.Kar Magirus" },
            { "category": "vehicles", "type": "O.Yol Iveco" },
            { "category": "vehicles", "type": "Ok Kardeşler" },
            { "category": "vehicles", "type": "Oldsmobile" },
            { "category": "vehicles", "type": "Opel" },
            { "category": "vehicles", "type": "Otokar" },
            { "category": "vehicles", "type": "Öztreyler" },
            { "category": "vehicles", "type": "Peugeot" },
            { "category": "vehicles", "type": "Piaggio" },
            { "category": "vehicles", "type": "Plymouth" },
            { "category": "vehicles", "type": "Polaris" },
            { "category": "vehicles", "type": "Pontiac" },
            { "category": "vehicles", "type": "Porsche" },
            { "category": "vehicles", "type": "Proton" },
            { "category": "vehicles", "type": "Pumarex" },
            { "category": "vehicles", "type": "Ramex" },
            { "category": "vehicles", "type": "Ramzey" },
            { "category": "vehicles", "type": "Regal Raptor" },
            { "category": "vehicles", "type": "Renault" },
            { "category": "vehicles", "type": "Rks" },
            { "category": "vehicles", "type": "Rolls Royce" },
            { "category": "vehicles", "type": "Rover" },
            { "category": "vehicles", "type": "Saab" },
            { "category": "vehicles", "type": "Salcano" },
            { "category": "vehicles", "type": "Same" },
            { "category": "vehicles", "type": "Samsung" },
            { "category": "vehicles", "type": "Scania" },
            { "category": "vehicles", "type": "Schmitz-Cargobull" },
            { "category": "vehicles", "type": "Seat" },
            { "category": "vehicles", "type": "Seçkinler" },
            { "category": "vehicles", "type": "Senda" },
            { "category": "vehicles", "type": "Serin" },
            { "category": "vehicles", "type": "Setra" },
            { "category": "vehicles", "type": "Seymak" },
            { "category": "vehicles", "type": "Shenke" },
            { "category": "vehicles", "type": "Skoda" },
            { "category": "vehicles", "type": "Skygo" },
            { "category": "vehicles", "type": "Skyjet" },
            { "category": "vehicles", "type": "Smart" },
            { "category": "vehicles", "type": "Spectre" },
            { "category": "vehicles", "type": "Ssangyong" },
            { "category": "vehicles", "type": "Steyr" },
            { "category": "vehicles", "type": "Stmax" },
            { "category": "vehicles", "type": "Subaru" },
            { "category": "vehicles", "type": "Sukida" },
            { "category": "vehicles", "type": "Suzuki" },
            { "category": "vehicles", "type": "SYM" },
            { "category": "vehicles", "type": "Tafe" },
            { "category": "vehicles", "type": "Tako" },
            { "category": "vehicles", "type": "Tata" },
            { "category": "vehicles", "type": "Taxas" },
            { "category": "vehicles", "type": "Temsa" },
            { "category": "vehicles", "type": "Tesla" },
            { "category": "vehicles", "type": "TGB" },
            { "category": "vehicles", "type": "Tirsan" },
            { "category": "vehicles", "type": "Titan" },
            { "category": "vehicles", "type": "Toyota" },
            { "category": "vehicles", "type": "T-rex" },
            { "category": "vehicles", "type": "Triumph" },
            { "category": "vehicles", "type": "Truva" },
            { "category": "vehicles", "type": "Tunalar Damper" },
            { "category": "vehicles", "type": "Tümosan" },
            { "category": "vehicles", "type": "TVS" },
            { "category": "vehicles", "type": "Uğures" },
            { "category": "vehicles", "type": "Universal" },
            { "category": "vehicles", "type": "Valtra-Hattat" },
            { "category": "vehicles", "type": "Vespa" },
            { "category": "vehicles", "type": "Vitello" },
            { "category": "vehicles", "type": "Volkswagen" },
            { "category": "vehicles", "type": "Volvo" },
            { "category": "vehicles", "type": "Wuxi" },
            { "category": "vehicles", "type": "Xintian" },
            { "category": "vehicles", "type": "Yağmur" },
            { "category": "vehicles", "type": "Yamaha" },
            { "category": "vehicles", "type": "Yeksan" },
            { "category": "vehicles", "type": "Yıldız" },
            { "category": "vehicles", "type": "Yuki" },
            { "category": "vehicles", "type": "Zealsun" },
            { "category": "vehicles", "type": "Zetor" },
            { "category": "vehicles", "type": "Zongshen" },
            { "category": "vehicles", "type": "Zorro" },
            { "category": "vehicles", "type": "Zundapp"}
        ],

        // Overriding the Backbone.sync method (the Backbone.fetch method calls the sync method when trying to fetch data)
        sync: function( method, model, options ) {

            // Local Variables
            // ===============

            // Instantiates an empty array
            var categories = [],

                // Stores the this context in the self variable
                self = this,

                // Creates a jQuery Deferred Object
                deferred = $.Deferred();

            // Uses a setTimeout to mimic a real world application that retrieves data asynchronously
            setTimeout( function() {

                // Filters the above sample JSON data to return an array of only the correct category type
                categories = _.filter( self.jsonArray, function( row ) {

                    return row.category === self.type;

                } );

                // Calls the options.success method and passes an array of objects (Internally saves these objects as models to the current collection)
                options.success( categories );

                // Triggers the custom `added` method (which the Category View listens for)
                self.trigger( "added" );

                // Resolves the deferred object (this triggers the changePage method inside of the Category Router)
                deferred.resolve();

            }, 1000);

            // Returns the deferred object
            return deferred;

        }

    } );

    // Returns the Model class
    return Collection;

} );