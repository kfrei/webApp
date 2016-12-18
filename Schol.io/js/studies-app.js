/**
 * Created by kfrei on 5/12/16.
 */





angular.module("studiesApp",[])

    .controller("studiesCtrl",function ($timeout,$scope,$http) {

        $scope.studySelect = ''; // set the default value


        $scope.init = function () {
            console.log("initialize Studies!");
        };

        $scope.studii = $http.get("studiesCollegeBA3.json")
            .success(function (data) {

                //var st1= data;
                //var temp = JSON.stringify(data)
                //    .replace(/ά/g,"α")
                //    .replace(/έ/g,"ε")
                //    .replace(/ή/g,"η")
                //    .replace(/ί/g,"ι")
                //    .replace(/ό/g,"ο")
                //    .replace(/ύ/g,"υ")
                //    .replace(/ώ/g,"ω")
                //    .replace(/address/g,"address2")
                //    .replace(/city/g,"city2");
                //var st2= JSON.parse(temp);
                //$scope.schools  = angular.merge([], st2, st1);
                ////$scope.page=$scope.schools.length;

                $scope.studii = data

            })
            .error(function (data) {
                console.log("something went wrong: ", data);
            });



            //var mArray = $http.get("studiesCollegeBA4.json")
            //.success(function (data) {
            //    mArray = data
            //})
            //.error(function (data) {
            //    console.log("something went wrong2: ", data);
            //});



            var mArray = {"element":
                [
                    {"parentItems": [
                        {
                            "id": 1,
                            "section": "Διοίκηση Επιχειρήσεων & Οικονομικά - Business",
                            "studies": [
                                {
                                    "st": "BA (Hons) BusinessManagement (Διοίκηση Επιχειρήσεων)"
                                },
                                {
                                    "st": "BA (Hons) Marketing (Μάρκετινγκ)"
                                },
                                {
                                    "st": "BSc (Hons) Economics for Business (Οικονομικά)"
                                },
                                {
                                    "st": "BSc (Hons) Economics (Οικονομικά)"
                                },
                                {
                                    "st": "BSc in Business Administration, Concentration in Finance"
                                },
                                {
                                    "st": "BSc in Business Administration, Concentration in International Business"
                                },
                                {
                                    "st": "BSc in Business Administration, Concentration in Entrepreneurial Management"
                                },
                                {
                                    "st": "BSc in Business Administration, Concentration in Marketing"
                                },
                                {
                                    "st": "BSc in Business Administration, Concentration in Hospitality and Tourism"
                                },
                                {
                                    "st": "BA (Hons) Business Studies"
                                },
                                {
                                    "st": "BA in International Management"
                                },
                                {
                                    "st": "BA in Management"
                                },
                                {
                                    "st": "BSc Concentration in Business Communications"
                                },
                                {
                                    "st": "BSc Concentration in Finance"
                                },
                                {
                                    "st": "BSc Concentration in International Business"
                                },
                                {
                                    "st": "BSc Concentration in Marketing"
                                },
                                {
                                    "st": "BSc in Accounting"
                                },
                                {
                                    "st": "BSc in Applied Management"
                                },
                                {
                                    "st": "BSc in Business Administration"
                                },
                                {
                                    "st": "BA (Hons) - Business Studies (Finance and Accounting)"
                                },
                                {
                                    "st": "BA (Hons) - Business Studies (Management)"
                                },
                                {
                                    "st": "BA (Hons) - Business Studies (Marketing)"
                                },
                                {
                                    "st": "BA (Hons) - Business Studies (Hotel and Hospitality)"
                                },
                                {
                                    "st": "BSc (Hons) in Business Administration (Entrepreneurship Management)"
                                },
                                {
                                    "st": "BSc (Hons) in Business Administration (Accounting with Finance)"
                                },
                                {
                                    "st": "BSc (Hons) in Business Administration (International Business)"
                                },
                                {
                                    "st": "BSc (Hons) in Business Administration (Marketing Communications)"
                                },
                                {
                                    "st": "BSc (Hons) in Business Administration (Marketing Management)"
                                },
                                {
                                    "st": "BSc (Hons) in Business Administration (Human Resource Management)"
                                },
                                {
                                    "st": "BSc (Hons) in Business Administration (Operations Management)"
                                },
                                {
                                    "st": "BSc (Hons) in Finance"
                                },
                                {
                                    "st": "BSc (Hons) in Healthcare Management"
                                },
                                {
                                    "st": "BSc (Hons) in International Tourism and Hospitality Management"
                                },
                                {
                                    "st": "BSc (Hons) in Logistics and Supply Chain Management"
                                },
                                {
                                    "st": "BSc (Hons) in Management Information Systems"
                                },
                                {
                                    "st": "BA (Hons) in Business with Shipping"
                                },
                                {
                                    "st": "BA Διοίκηση Επιχειρήσεων"
                                },
                                {
                                    "st": "BA Διοίκηση Ξενοδοχειακών Μονάδων και Επιχειρήσεων Φιλοξενίας"
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "section": "Ναυτιλιακά - Nautical Education",
                            "studies": [
                                {
                                    "st": "BSc (Hons) Maritime Business (Ναυτιλιακές Σπουδές)"
                                },
                                {
                                    "st": "BSc (Hons) Shipping and Port Management(Διοίκηση Λιμένων και Ναυτιλιακών Επιχειρήσεων)"
                                },
                                {
                                    "st": "BA in Marine Electrical Engineering"
                                },
                                {
                                    "st": "BA in Navigation"
                                }
                            ]
                        },
                        {
                            "id": 3,
                            "section": "Τουρισμός - Tourism",
                            "studies": [
                                {
                                    "st": "BA (Hons) International Hospitality and Tourism Management(Τουρισμός και Ξενοδοχειακές Επιχειρήσεις)"
                                },
                                {
                                    "st": "BA Culinary Arts and Food Service Development (Επισιτιστικές Τέχνες και Ανάπτυξη Υπηρεσιών Εστίασης)"
                                },
                                {
                                    "st": "BA Culinary Arts, Baking and Patisserie  (Αρτοποιία / Ζαχαροπλαστική)"
                                },
                                {
                                    "st": "BA (Hons) in Business Studies with Tourism"
                                },
                                {
                                    "st": "BSc (Hons) International Hospitality Management"
                                }
                            ]
                        },
                        {
                            "id": 4,
                            "section": "Πληροφορική - Informatics & Technology",
                            "studies": [
                                {
                                    "st": "BSc (Hons) Computing (Πληροφορική)"
                                },
                                {
                                    "st": "BSc (Hons) Computer Networks (Πληροφορική και Δίκτυα Η/Υ)"
                                },
                                {
                                    "st": "BEng (Hons) Electrical & Electronic Systems (Ηλεκτρολόγων – Ηλεκτρονικών Μηχανικών)"
                                },
                                {
                                    "st": "BSc of Science in Computer Science"
                                },
                                {
                                    "st": "BSc of Science in Business and Computing"
                                },
                                {
                                    "st": "BSc Πληροφορική"
                                }
                            ]
                        },
                        {
                            "id": 4,
                            "section": "Επιστήμες Υγείας - Health Sciences",
                            "studies": [
                                {
                                    "st": "BSc (Hons) Nursing (Νοσηλευτική)"
                                },
                                {
                                    "st": "BSc (Hons) Logopeadics (Λογοθεραπεία)"
                                },
                                {
                                    "st": "BSc (Hons) Physiotherapy (Φυσικοθεραπεία)"
                                },
                                {
                                    "st": "BSc (Hons) Biomedical Sciences (Βιοϊατρικές Επιστήμες)"
                                },
                                {
                                    "st": "BSc (Hons) Sports Coaching (Προπονητική)"
                                },
                                {
                                    "st": "BSc (Hons) Biomedical Sciences (Βιοϊατρικές Επιστήμες)"
                                },
                                {
                                    "st": "BSc (Hons) Sports Coaching (Προπονητική)"
                                },
                                {
                                    "st": "BSc (Hons) Dietetics (Διαιτολογία)"
                                },
                                {
                                    "st": "BSc (Hons) Occupational Therapy (Εργοθεραπεία)"
                                },
                                {
                                    "st": "BSc (Hons) in Biomedical Sciences"
                                },
                                {
                                    "st": "BSc (Hons) in Human Nutrition"
                                },
                                {
                                    "st": "BSc (Hons) in Psychology"
                                },
                                {
                                    "st": "BSc (Hons) Extended in Science"
                                }
                            ]
                        },
                        {
                            "id": 5,
                            "section": "Ανθρωπιστικές Επιστήμες - Humanities and Social Sciences",
                            "studies": [
                                {
                                    "st": "BSc (Hons) Psychology (Ψυχολογία)"
                                },
                                {
                                    "st": "BA (Hons) Early Childhood Studies (Προσχολική Ηλικία)"
                                },
                                {
                                    "st": "BA (Hons) Special Education (Ειδική Αγωγή)"
                                },
                                {
                                    "st": "BA of Laws (LLB) (Νομική)"
                                },
                                {
                                    "st": "BSc (Hons) Politics and International Relations (Πολιτικές Επιστήμες και Διεθνείς Σχέσεις)"
                                },
                                {
                                    "st": "BA (Hons) in English Language and English Language Teaching"
                                },
                                {
                                    "st": "BA (Hons) in Film Studies"
                                },
                                {
                                    "st": "BA Concentration Communication: Mass Media Production"
                                },
                                {
                                    "st": "BA Concentration in International Relations"
                                },
                                {
                                    "st": "BSc Concentration in Psychology"
                                },
                                {
                                    "st": "BA (Hons) International Studies"
                                },
                                {
                                    "st": "BSc of Arts in International Relations"
                                },
                                {
                                    "st": "BSc of Arts in English"
                                },
                                {
                                    "st": "BSc Ψυχολογία"
                                },
                                {
                                    "st": "BA Αγγλική Γλώσσα και Γλωσσολογία"
                                }
                            ]
                        },
                        {
                            "id": 6,
                            "section": "Πολυτεχνικές Σπουδές - Engineering",
                            "studies": [
                                {
                                    "st": "BA (Hons) Architecture (Αρχιτεκτονική)"
                                },
                                {
                                    "st": "BEng (Hons) Civil Engineering & Construction (Πολιτικών Μηχανικών)"
                                },
                                {
                                    "st": "BEng (Hons) Electrical and Electronic Systems (Ηλεκτρολόγων - Ηλεκτρονικών Μηχανικών)"
                                },
                                {
                                    "st": "BEng (Hons) / MEng Mechanical Engineering and Manufacturing  (Μηχανολόγων Μηχανικών)"
                                }
                            ]
                        },
                        {
                            "id": 7,
                            "section": "Πολιτισμός & Επικοινωνία",
                            "studies": [
                                {
                                    "st": "BA in Media Production - Journalism (Δημοσιογραφία)"
                                },
                                {
                                    "st": "BA in Media Production - Film Directing (Σκηνοθεσία Κινηματογράφου)"
                                },
                                {
                                    "st": "BSc (Hons) Music Technology (Μουσική Τεχνολογία)"
                                }
                            ]
                        },
                        {
                            "id": 8,
                            "section": "Liberal Arts & Sciences",
                            "studies": [
                                {
                                    "st": "BA (Hons) in Communication"
                                },
                                {
                                    "st": "BA (Hons) in Economics"
                                },
                                {
                                    "st": "BA (Hons) in English (English and American Literature)"
                                },
                                {
                                    "st": "BA (Hons) in English (English Literature with Linguistics)"
                                },
                                {
                                    "st": "BSc (Hons) in Environmental Studies"
                                },
                                {
                                    "st": "BA (Hons) in History"
                                },
                                {
                                    "st": "BA (Hons) in Philosophy"
                                },
                                {
                                    "st": "BA (Hons) in Sociology"
                                },
                                {
                                    "st": "BSc (Hons) in Information Technology (Software Development)"
                                },
                                {
                                    "st": "BSc (Hons) in Information Technology (Digital Media Technologies)"
                                },
                                {
                                    "st": "BSc (Hons) in Information Technology (Network Technologies)"
                                }
                            ]
                        },
                        {
                            "id": 9,
                            "section": "Fine and Performing Arts",
                            "studies": [
                                {
                                    "st": "BA (Hons) in Art History"
                                },
                                {
                                    "st": "BA (Hons) in Contemporary Dance Practice"
                                },
                                {
                                    "st": "BA (Hons) in Graphic Design"
                                },
                                {
                                    "st": "BA (Hons) in Music and Music Performance"
                                },
                                {
                                    "st": "BA (Hons) in Theater Arts"
                                },
                                {
                                    "st": "BA (Hons) in Visual Arts"
                                }
                            ]
                        }
                    ]
                    }


                ]
            };

        $scope.studi = mArray.element[0];





        $timeout(function(){
            $scope.ready = true;
        },120);

        //var myArray = {"elements":
        //                        [
        //                            {"parentItems": [
        //                                            {"titleParent": "Section 1",
        //                                            "childeItems": [
        //                                                {"titleChild": "Study 1.1"},
        //                                                {"titleChild": "Study 1.2"},
        //                                                {"titleChild": "Study 1.3"}
        //                                                            ]},
        //                                            {"titleParent": "Section 2",
        //                                            "childeItems": [
        //                                                {"titleChild": "Study 2.1"},
        //                                                {"titleChild": "Study 2.2"}
        //                                                            ]
        //                                            }]}
        //                            //{"parentItems": [
        //                            //    {"titleParent": "Section 1",
        //                            //        "childeItems": [
        //                            //            {"titleChild": "Study 1.10"},
        //                            //            {"titleChild": "Study 1.20"},
        //                            //            {"titleChild": "Study 1.30"}
        //                            //        ]},
        //                            //    {"titleParent": "Section 2",
        //                            //        "childeItems": [
        //                            //            {"titleChild": "Study 2.10"},
        //                            //            {"titleChild": "Study 2.20"}
        //                            //        ]
        //                            //    },
        //                            //    {"titleParent": "Section 3",
        //                            //        "childeItems": [
        //                            //            {"titleChild": "Study 3.10"},
        //                            //            {"titleChild": "Study 3.20"}
        //                            //        ]
        //                            //    },
        //                            //]}
        //                        ]
        //};
        //
        //$scope.myarray = myArray.elements[0];







    });







/* this filter avoids Filter notTo Array error under angular v1.4 */
//.filter('toArray', function () {
//    return function (obj, addKey) {
//        if (!angular.isObject(obj)) return obj;
//        if ( addKey === false ) {
//            return Object.keys(obj).map(function(key) {
//                return obj[key];
//            });
//        } else {
//            return Object.keys(obj).map(function (key) {
//                var value = obj[key];
//                return angular.isObject(value) ?
//                    Object.defineProperty(value, '$key', { enumerable: false, value: key}) :
//                { $key: key, $value: value };
//            });
//        }
//    };
//});







