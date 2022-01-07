(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_Config_politiques-utilisation_politiques-utilisation_module_ts"],{

/***/ 32839:
/*!************************************************************************************************!*\
  !*** ./src/app/layouts/Config/politiques-utilisation/politiques-utilisation-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolitiquesUtilisationPageRoutingModule": () => (/* binding */ PolitiquesUtilisationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _politiques_utilisation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./politiques-utilisation.page */ 12558);




const routes = [
    {
        path: '',
        component: _politiques_utilisation_page__WEBPACK_IMPORTED_MODULE_0__.PolitiquesUtilisationPage
    }
];
let PolitiquesUtilisationPageRoutingModule = class PolitiquesUtilisationPageRoutingModule {
};
PolitiquesUtilisationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PolitiquesUtilisationPageRoutingModule);



/***/ }),

/***/ 34169:
/*!****************************************************************************************!*\
  !*** ./src/app/layouts/Config/politiques-utilisation/politiques-utilisation.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolitiquesUtilisationPageModule": () => (/* binding */ PolitiquesUtilisationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _politiques_utilisation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./politiques-utilisation-routing.module */ 32839);
/* harmony import */ var _politiques_utilisation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./politiques-utilisation.page */ 12558);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let PolitiquesUtilisationPageModule = class PolitiquesUtilisationPageModule {
};
PolitiquesUtilisationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _politiques_utilisation_routing_module__WEBPACK_IMPORTED_MODULE_0__.PolitiquesUtilisationPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_politiques_utilisation_page__WEBPACK_IMPORTED_MODULE_1__.PolitiquesUtilisationPage]
    })
], PolitiquesUtilisationPageModule);



/***/ }),

/***/ 12558:
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/Config/politiques-utilisation/politiques-utilisation.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolitiquesUtilisationPage": () => (/* binding */ PolitiquesUtilisationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_politiques_utilisation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./politiques-utilisation.page.html */ 84097);
/* harmony import */ var _politiques_utilisation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./politiques-utilisation.page.scss */ 60954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PolitiquesUtilisationPage = class PolitiquesUtilisationPage {
    constructor() { }
    ngOnInit() {
    }
};
PolitiquesUtilisationPage.ctorParameters = () => [];
PolitiquesUtilisationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-politiques-utilisation',
        template: _raw_loader_politiques_utilisation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_politiques_utilisation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PolitiquesUtilisationPage);



/***/ }),

/***/ 60954:
/*!****************************************************************************************!*\
  !*** ./src/app/layouts/Config/politiques-utilisation/politiques-utilisation.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  padding: 10px;\n}\n\nh1 {\n  color: red;\n}\n\nh3 {\n  font-weight: bold;\n}\n\nh5 {\n  font-weight: bold;\n}\n\nh6 {\n  font-weight: bold;\n}\n\ndiv {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGl0aXF1ZXMtdXRpbGlzYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6InBvbGl0aXF1ZXMtdXRpbGlzYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oMSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 84097:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/Config/politiques-utilisation/politiques-utilisation.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Politiques d'utilisation\" [isParam]=\"true\"></app-header>\n\n<ion-content>\n  <div>\n    <h1>Politique d’utilisation des données\n    </h1>\n    La présente politique décrit les informations que nous traitons pour le fonctionnement de\n    Sport’up\n    <h3>Quels types d’informations recueillons-nous ?</h3>\n    Pour fournir les Produits sport’up, nous devons traiter des informations vous concernant. Les\n    types d’informations que nous recueillons dépendent de la manière dont vous utilisez nos\n    Produits. Apprenez comment accéder aux informations que nous recueillons et comment les\n    supprimer en consultant les Paramètres\n    <h5>Ce que vous et d’autres personnes faites et fournissez.\n    </h5>\n    <h6>• Informations et contenus que vous fournissez : </h6> Nous recueillons le contenu, les\n    communications ainsi que d’autres informations que vous fournissez lorsque vous\n    utilisez nos Produits, notamment lorsque vous créez un compte, lorsque vous créez ou\n    partagez du contenu, ou lorsque vous communiquez avec d’autres personnes ou leur\n    envoyez des messages. Cela peut comprendre des informations présentes dans le\n    contenu que vous fournissez (par exemple, des métadonnées) ou concernant un tel\n    contenu, telles que le lieu d’une photo ou la date à laquelle un fichier a été créé. Cela\n    peut également comprendre ce que vous voyez au moyen des fonctionnalités que nous\n    fournissons, telles que notre appareil photo, de sorte que nous puissions proposer des\n    masques et des filtres que vous pourriez aimer ou vous donner des conseils sur\n    l’utilisation des formats de l’appareil photo. Nos systèmes traitent automatiquement le\n    contenu et les communications que vous et d’autres fournissez afin d’analyser le\n    contexte. Apprenez-en davantage sur la manière de gérer les personnes qui peuvent\n    accéder aux éléments que vous partagez.\n    <h6>• Données bénéficiant de protections spéciales :</h6> vous pouvez choisir de fournir des\n    informations dans les champs de votre profil ou dans des évènements marquants à\n    propos de vos croyances religieuses, de vos opinions politiques, des personnes par\n    lesquelles vous êtes « intéressé(e) » ou de votre santé. Ces informations et d’autres\n    (telle que l’origine ethnique, les croyances philosophiques ou l’affiliation à un syndicat\n    professionnel) pourraient être soumises à des protections spéciales conformément à\n    la législation de votre pays.\n    <h6> • Réseaux et connexions :</h6> Nous recueillons des informations sur les personnes,\n    les Pages, les comptes, les hashtags et les groupes avec lesquels vous êtes en\n    contact, ainsi que la manière dont vous interagissez avec eux sur nos Produits, par\n    exemple, les personnes avec lesquelles vous communiquez le plus ou les groupes\n    dont vous faites partie\n    <h6> • Votre utilisation :</h6> Nous recueillons des informations concernant la manière dont vous\n    utilisez nos Produits, telles que les types de contenu que vous consultez ou avec\n    lesquels vous interagissez, les fonctionnalités que vous utilisez, les actions que vous\n    réalisez, les personnes ou les comptes avec lesquels vous interagissez, et l’heure,\n    la fréquence et la durée de vos activités. Par exemple, nous enregistrons quand vous\n    utilisez et quand vous avez utilisé pour la dernière fois nos Produits, ainsi que les\n    publications, les vidéos ou tout autre contenu que vous visualisez sur nos Produits.\n    Nous recueillons également des informations sur la manière dont vous utilisez des\n    fonctionnalités telles que notre appareil photo.\n    <h6>• Informations à propos des transactions réalisées sur nos Produits :</h6> Si vous\n    utilisez nos Produits pour effectuer des achats ou toute autre transaction financière\n    (par exemple, lorsque vous effectuez un achat dans un jeu ou lorsque vous faites\n    un don), nous recueillons des données concernant cet achat ou cette transaction.\n    Ceci comprend vos informations de paiement, telles que le numéro de votre carte de\n    crédit ou de débit et d’autres informations concernant votre carte, d’autres\n    informations de compte et d’authentification, ainsi que des données de facturation et\n    de livraison, et vos coordonnées.\n    <h6>• Les activités d’autres personnes et les informations qu’elles fournissent vous\n      concernant :</h6> Nous recevons et analysons également le contenu, les\n    communications et les informations que d’autres personnes fournissent lorsqu’elles\n    utilisent nos Produits. Il peut s’agir d’informations vous concernant, par exemple\n    lorsque d’autres personnes partagent ou commentent une photo de vous, vous\n    envoient un message, ou téléchargent, synchronisent ou importent vos coordonnées.\n    Informations sur les appareils\n    Comme décrit ci-dessous, nous recueillons des informations depuis et concernant les\n    ordinateurs connectés et les autres appareils connectés au web que vous utilisez et qui\n    s’intègrent à nos Produits, et nous combinons ces informations sur les différents appareils que\n    vous utilisez. Par exemple, nous utilisons les informations recueillies concernant votre\n    utilisation de nos Produits sur votre téléphone afin de mieux personnaliser le contenu\n    (notamment les publicités) ou les fonctionnalités qui s’affichent lorsque vous utilisez nos\n    Produits sur un autre appareil, notamment votre ordinateur portable ou votre tablette, ou afin\n    d’évaluer si vous avez effectué sur un autre appareil une action en réaction à une publicité\n    que nous vous avions montrée sur votre téléphone.\n    <h6>Les informations que nous obtenons depuis ces appareils comprennent :\n    </h6>\n    • Attributs des appareils : des informations telles que le système d’exploitation, les\n    versions matérielles et logicielles, le niveau de batterie, l’intensité du signal, l’espace\n    de stockage disponible, le type de navigateur, le nom et le type des applications et\n    des fichiers, ainsi que les plugins.\n    • Activités sur l’appareil : les informations concernant les opérations et les\n    comportements sur l’appareil, par exemple, lorsqu’une fenêtre est mise au premier\n    plan ou en arrière-plan, ainsi que les mouvements de la souris (permettant de\n    différencier les humains des bots).\n    • Identifiants : les identifiants uniques, identifiants d’appareils et autres identifiants,\n    notamment ceux provenant de jeux, d’applications ou de comptes que vous utilisez,\n    et les identifiants d’appareils familiaux (ou autres identifiants associés à un même\n    appareil ou compte).\n    • Signaux des appareils : signaux Bluetooth et informations concernant les points\n    d’accès Wi-Fi, les balises et les tours de télécommunication à proximité.\n    • Données issues des paramètres de l’appareil : les informations que vous nous\n    autorisez à recevoir par le biais des paramètres de l’appareil que vous activez,\n    notamment l’accès à votre localisation GPS, à votre appareil photo ou à vos photos.\n    • Réseau et connexion : des informations telles que le nom de votre opérateur mobile\n    ou de votre fournisseur d’accès à Internet, votre langue, votre fuseau horaire, votre\n    numéro de téléphone mobile, votre adresse IP, votre vitesse de connexion et, dans\n    certains cas, des informations concernant d’autres appareils situés à proximité ou\n    sur votre réseau\n    • Données issues des cookies : données provenant des cookies enregistrés sur votre\n    appareil, notamment les identifiants et paramètres des cookies.\n    <h5> Comment utilisons-nous ces informations ?</h5>\n    <h6>- Proposer, personnaliser et améliorer nos Produits. </h6>\n    Nous utilisons les informations à notre disposition pour fournir nos Produits, notamment pour\n    en personnaliser les fonctionnalités et le contenu (notamment votre Fil d’actualité, les Stories\n    et les publicités) et pour vous faire des suggestions (comme des groupes ou\n    des évènements susceptibles de vous intéresser ou des sujets que vous pourriez avoir envie\n    de suivre) sur nos Produits et en dehors. Pour créer des Produits personnalisés à la fois\n    uniques et pertinents, nous utilisons vos connexions, vos préférences, vos centres d’intérêt et\n    vos activités à partir des données que nous recueillons, des informations que vous ou des tiers\n    nous fournissez et d’autres renseignements (notamment les données bénéficiant de\n    protections spéciales que vous choisissez de nous communiquer). Nous nous servons\n    également des données concernant votre utilisation de nos Produits et vos interactions avec\n    ceux-ci, ainsi que des données concernant les personnes, les lieux ou les éléments avec\n    lesquels vous êtes connecté(e) ou qui vous intéressent sur nos Produits et en dehors.\n    <h6>- Communiquer avec vous. </h6>\n    Nous utilisons les informations à notre disposition pour vous envoyer des communications\n    commerciales, vous parler de nos Produits et vous faire part de nos conditions et de nos\n    règlements. Nous nous servons également de vos informations pour vous répondre lorsque\n    vous nous contactez.\n    <h6>- Faire de la recherche et innover pour le bien-être social.\n    </h6>\n    Nous utilisons les informations à notre disposition (notamment celles de partenaires de\n    recherches avec lesquels nous collaborons) pour orienter et appuyer la recherche et\n    l’innovation sur des sujets de bien-être social général, d’avancement technologique, d’intérêt\n    public, de santé et de bien-être.\n    <h6>- Personnes et comptes avec lesquels vous communiquez et partagez du contenu</h6>\n    Lorsque vous partagez et communiquez à l’aide de nos Produits, vous avez la possibilité de\n    choisir l’audience autorisée à voir ce que vous partagez. Par exemple, lorsque vous publiez\n    vous sélectionnez l’audience de votre publication en choisissant un groupe, tous vos amis,\n    tout le monde ou une liste de personnes personnalisée. Votre réseau peut également voir les\n    actions que vous avez effectuées sur nos Produits, notamment vos interactions avec des\n    publicités et du contenu sponsorisé. Nous permettons également aux autres comptes de voir\n    les personnes qui ont consulté leurs actualités ou leurs Stories.\n    Les informations publiques peuvent être vues par tout le monde, sur nos Produits ou en\n    dehors, toute information publique que vous partagez avec tout le monde, les informations\n    igurant dans votre profil public, ainsi que le contenu que vous partagez sur une Page, compte\n    public ou sur un autre forum public. Vous, d’autres personnes utilisant Sport’up, et nous\n    pouvons accorder un accès à des informations publiques ou envoyer de telles informations à\n    n’importe qui sur nos produits ou en dehors, y compris sur les autres Produits des entités\n    Sport’up, dans les résultats de recherche ou par le biais des outils et des API. Il est également\n    possible de consulter, de repartager ou de télécharger les informations publiques au moyen\n    de services tiers, notamment les moteurs de recherche, les API, de sites web et d’autres\n    services intégrés dans nos Produits.\n    <h6>- Découvrez quelles informations sont publiques et comment contrôler votre\n      visibilité sur Sport’up/</h6>\n    <h6>• Contenu vous concernant partager ou repartagé par d’autres personnes\n    </h6>\n    Vous devez réfléchir aux personnes avec lesquelles vous choisissez de partager du contenu,\n    car ces personnes qui peuvent voir votre activité sur nos Produits peuvent ensuite la partager\n    avec d’autres gens sur nos Produits et en dehors, y compris avec des individus et des\n    entreprises n’appartenant pas à l’audience avec laquelle vous partagez votre contenu. Par\n    exemple, lorsque vous partagez une publication avec des amis ou des comptes particuliers ou\n    leur envoyez un message, ils peuvent télécharger ce contenu, en faire une capture d’écran ou\n    repartager ce contenu avec d’autres personnes sur nos Produits ou en dehors, en personne\n    ou dans le cadre d’expériences de réalité virtuelle. En outre, lorsque vous commentez la\n    publication d’une autre personne ou réagissez à son contenu, votre commentaire ou votre\n    réaction est visible par tous les individus qui peuvent voir le contenu de cette autre personne,\n    et l’autre personne peut modifier l’audience ultérieurement.\n    Les gens peuvent également utiliser nos Produits pour créer et partager du contenu vous\n    concernant avec l’audience de leur choix. Par exemple, ces personnes peuvent partager une\n    photo de vous dans une actualité, vous mentionner ou vous identifier dans un lieu dans une\n    publication, ou partager des informations vous concernant dans leurs publications ou leurs\n    messages. Si ce que d’autres personnes ont partagé à votre sujet sur nos Produits vous\n    dérange, signaler du contenu.\n    <h6>• Informations relatives à votre statut actif ou à votre présence sur nos Produits.\n    </h6>\n    Les membres de votre réseau peuvent voir des signaux leur indiquant si vous êtes actif ou non\n    sur nos Produits, y compris si vous êtes actuellement actif sur sport’up, ou à quel moment\n    vous avez utilisé nos Produits pour la dernière fois.\n    <h6>• Nouveau propriétaire.\n    </h6>\n    Si les droits de propriété ou le contrôle d’une partie ou de l’intégralité de nos Produits ou de\n    leurs éléments changent, nous avons la possibilité de communiquer vos informations au\n    nouveau propriétaire.\n    <h6>• Partage avec des partenaires tiers\n    </h6>\n    Nous collaborons avec des partenaires tiers qui nous aident à fournir et à améliorer nos\n    Produits ou qui utilisent les outils professionnels Sport’up pour développer leur activité, ce qui\n    nous permet d’exploiter nos sociétés et de proposer des services gratuits dans le monde\n    entier. Nous ne vendons aucune de vos informations à quiconque et nous ne le ferons jamais.\n    Nous imposons également des restrictions strictes quant à la façon dont les partenaires\n    peuvent utiliser et révéler les données que nous leur communiquons. Voici les types de tiers\n    avec lesquels nous partageons des informations :\n    <h6>• Partenaires qui utilisent le service d’analyse.\n    </h6>\n    Nous fournissons des statistiques et des informations (insights) agrégées qui permettent aux\n    individus et aux entreprises de comprendre la façon dont les gens interagissent avec leurs\n    publications, leurs annonces, leurs Pages, leurs vidéos et tout autre contenu sur les Produits\n    sport’up et en dehors. Par exemple, les administrateurs de Pages et les profils professionnels\n    reçoivent des informations à propos du nombre de personnes ou de comptes qui ont consulté\n    ou commenté leurs publications ou réagi à celles-ci, ainsi que des informations\n    démographiques agrégées et d’autres renseignements qui les aident à comprendre les\n    interactions avec leur Page ou leur compte.\n    <h6>• Annonceurs.\n    </h6>\n    Nous fournissons aux annonceurs des rapports sur les types de personnes qui voient leurs\n    publicités et sur les performances de leurs publicités, mais nous ne partageons pas\n    d’informations permettant de vous identifier personnellement (des informations telles que votre\n    nom ou votre adresse e-mail qui peuvent être en elles-mêmes utilisées pour vous contacter\n    ou vous identifier), sauf si vous nous en donnez l’autorisation. Par exemple, nous\n    communiquerons aux annonceurs des informations générales concernant la démographie et\n    les centres d’intérêt pour les aider à mieux comprendre leur audience..\n    <h6>• Partenaires de mesure.\n    </h6>\n    Nous partageons des informations vous concernant avec des entreprises qui les regroupent\n    pour fournir des analyses et des rapports de mesure à nos partenaires.\n    <h6>• Partenaires proposant des biens et des services sur nos Produits.\n    </h6>\n    Lorsque vous vous abonnez pour recevoir du contenu payant, ou lorsque vous effectuez un\n    achat auprès d’un vendeur sur nos Produits, le créateur du contenu ou le vendeur peuvent\n    recevoir vos informations publiques et d’autres informations que vous leur communiquez, ainsi\n    que les renseignements nécessaires pour finaliser la transaction, notamment vos\n    renseignements d’expédition et vos coordonnées.\n    <h6>• Fournisseurs et prestataires de services.\n    </h6>\n    Nous donnons des informations et du contenu aux fournisseurs et prestataires de services qui\n    soutiennent nos activités, notamment en proposant des services d’infrastructure technique, en\n    analysant l’utilisation de nos Produits, en fournissant un service à la clientèle, en facilitant les\n    processus de paiement ou en réalisant des sondages.\n    <h6>• Chercheurs et universitaires.\n    </h6>\n    Nous communiquons également des informations et du contenu à des partenaires de\n    recherche et à des universitaires pour réaliser des études faisant progresser l’érudition et\n    l’innovation qui soutiennent notre activité ou notre mission et améliorant la découverte et\n    l’innovation dans les domaines du bien-être social général, de l’avancement technologique, de\n    l’intérêt public, de la santé et du bien-être.\n    <h6>• Forces de l’ordre ou demandes légales.\n    </h6>\n    Nous partageons des informations avec les forces de l’ordre ou en réponse à des demandes\n    légales dans les circonstances décrites ci-dessous.\n    Pour en savoir plus sur la façon de contrôler les informations vous concernant que vous ou\n    d’autres personnes partagez avec des partenaires tiers, consultez les paramètre sport’up\n    <h3>Comment puis-je gérer ou supprimer les informations me\n      concernant ?</h3>\n    Nous vous offrons la possibilité de consulter, de rectifier, de transférer et d’effacer vos\n    données. Pour en savoir plus, consultez les paramètre sport’up.\n    Nous stockons les données jusqu’à ce qu’il ne soit plus nécessaire de fournir nos services et\n    nos Produits sport’up, ou jusqu’à ce que votre compte soit supprimé, selon la première de ces\n    éventualités. Il s’agit d’une décision au cas par cas qui dépend d’aspects tels que la nature\n    des données, la raison de leur collecte et de leur traitement et les besoins de conservations\n    légaux ou opérationnels concernés. Par exemple, lorsque vous faites une recherche, vous\n    pouvez consulter et supprimer cette recherche de votre historique de recherche à tout moment,\n    mais l’enregistrement de cette recherche n’est supprimé qu’au bout de 6 mois. Si vous\n    envoyez une copie de votre pièce d’identité officielle à des fins de vérification de votre compte,\n    nous supprimons cette copie 30 jours après l’examen, sauf disposition contraire.\n    Lorsque vous supprimez votre compte, nous supprimons le contenu que vous avez publié,\n    comme vos photos et vos statuts ; et vous ne pourrez plus récupérer ces informations par la\n    suite. Les informations vous concernant que d’autres personnes ont partagées ne font pas\n    partie de votre compte et ne seront pas supprimées. Si vous ne souhaitez pas supprimer votre\n    compte, mais plutôt ne plus utiliser les Produits temporairement, vous pouvez désactiver votre\n    compte. Pour supprimer votre compte à tout moment, n’hésitez pas à consulter les paramètre\n    sport’up.\n    <h3>Comment procédons-nous pour répondre aux demandes\n      légales et pour éviter tout risque de dommage ?</h3>\n    Nous accédons à vos informations, les conservons et les partageons avec les organismes de\n    réglementation, les autorités judiciaires ou d’autres :\n    • pour répondre à une demande légale (telle qu’un mandat de perquisition, une décision\n    de justice ou une assignation à témoin) si nous jugeons en toute bonne foi que la loi\n    nous demande de le faire : cela peut inclure la réponse à des demandes légales\n    provenant de juridictions, lorsque nous avons toutes les raisons de penser que la\n    réponse est requise par la loi de cette juridiction, qu’elle s’applique aux personnes\n    qui utilisent le service et qui dépendent de cette juridiction et qu’elle est conforme aux\n    normes internationalement reconnues.\n    • Lorsque nous avons des raisons de penser en toute bonne foi que cela est nécessaire\n    pour détecter, empêcher et maîtriser la fraude, l’utilisation non autorisée des\n    Produits, des violations de nos conditions ou règlements, ou toutes autres activités\n    dangereuses ou illégales ; pour nous protéger nous-mêmes (notamment nos droits,\n    notre propriété ou nos Produits), vous ou d’autres, notamment dans le cadre\n    d’enquêtes ou de demandes réglementaires ; ou pour éviter tout décès ou toute\n    blessure corporelle imminente. Par exemple, le cas échéant, nous fournissons des\n    informations à des partenaires tiers et nous recevons des informations desdits\n    partenaires à propos de la fiabilité de votre compte pour éviter une fraude, un abus\n    ou toute autre activité dommageable dans nos Produits comme en dehors de ceuxci.\n    Les informations vous concernant que nous recevons (notamment les données de\n    transactions financières liées aux achats effectués) peuvent être consultées et conservées\n    pendant une période prolongée lorsqu’elles font l’objet d’une demande ou d’une obligation\n    légale, d’une enquête gouvernementale ou d’enquêtes sur d’éventuelles violations de nos\n    conditions d’utilisation ou de nos règlements, ou pour éviter tout autre dommage. Nous\n    conservons également pendant une durée minimale d’un an les informations des comptes\n    désactivés suite à une violation des conditions d’utilisation, et ce, afin d’éviter les abus répétés\n    ou d’autres violations des conditions d’utilisation.\n    <h3>Comment gérons-nous et transférons-nous les données\n      dans le cadre de nos services internationaux ?</h3>\n    Nous partageons des informations à l’international, à la fois en interne avec les Entités sport’up\n    et en externe avec nos partenaires et avec ceux avec qui vous communiquez et partagez des\n    contenus dans le monde entier, conformément à ce règlement. Vos informations peuvent, par\n    exemple, être transférées ou transmises dans votre pays ou dans d’autres pays en dehors de\n    celui où vous vivez, ou stockées et traitées dans l’un de ces pays aux fins décrites dans le\n    présent règlement. Ces transferts de données sont nécessaires pour fournir les services\n    énoncés dans les Conditions d’utilisation de sport’up et les Conditions d’utilisation, et afin\n    d’exploiter et de vous fournir nos Produits dans le monde entier. Nous utilisons des clauses\n    contractuelles standard, nous nous fions aux décisions d’adéquation de la Commission\n    européenne concernant certains pays, le cas échéant, et nous obtenons votre consentement\n    pour ces transferts de données vers d’autres pays.\n    <h3>Comment procédons-nous pour vous aviser des\n      modifications apportées à la présente politique ?</h3>\n    Nous vous aviserons de toute modification importante apportée à la présente politique et vous\n    donnerons la possibilité de consulter la version révisée avant de continuer à utiliser nos\n    Produits.\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_Config_politiques-utilisation_politiques-utilisation_module_ts.js.map