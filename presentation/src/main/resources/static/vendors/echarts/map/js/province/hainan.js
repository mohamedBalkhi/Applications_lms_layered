(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('海南', {
        "type": "FeatureCollection", "features": [{
            "id": "460100", "geometry": {
                "type": "Polygon",
                "coordinates": ["@@¢NDxBrCpI^OTGjGfBBBFFB\\PlRRPJhJ\\DC|K|Q¤kfGL@PDFAHGFMFENEJGNODK@OCE@AFAHEXGJEL@BEFAD@BC@MFGD@DAL_CKAEN@D@BBNKF@BEFEDGFCFICMAEJGDUBGAEKIAEHQJAXFN@DCBEJIJCBGACWMCG@CFGDYFKCEMEGEE@SAKFELBFEDEIEBIAKOGCEGAAACECCBCABIB@FDB@ACXA@CCAKAACBGAAEAEEAIEICOCCCAGEGSBEHKBIDA^IDE@ICEGBOCKBIGE@CAGBGGACJCJ@HDDABMGGFU@MAEFGPMFBHCHBTADCBCDAVBD@@AEEGAGEKABGC@CCDECIDIAEGIEMGECIIGAC@[AKFMDCEI@CFBDAAGBGCQGACIE@@AE@IEEDKACC@EGBCAEBI@ADC@EA[CCAG@ECG@EDC@EBCDELEDC@OABDAFDDDJBBBFBF@HDJMCWBECAEA@UVGDC@ABC^ABM@IHGDABOEEK@ACAODGDK@EGDCAGACCAGBKFI@KHIBGDGNAJDLFJ@@EDC@CCAB@DCAKBEEABGAEBADCAAFA@AH@BABBFADBBC@BDADGA@BCB@FCDANEHGDAD@HADBNBXBFHJ@FAHXLFJBFAFCB@HEFCNIBBD@HDDADIAASCEeDCBIECBIFEBEACCEAOCEICCGOEEICABWJC@CAI@GAG@A@EGEDE@ECG@ACBKqGUIE@KJAHHFBTFNBBABCDAJQ@IBAT@BFDBJFF@LNFFNFADBABCBELDVCDYL@JGJIhABHR@H@FCFARWRGBIAMB@FHHPAHBET@BABCCMCAA]LEAKIMGG@CDAJ@BF@HDRA@FCF@DBVGHKDAFFJFDNF@DEHI@MLEJ@JBFDBDABCH@BDFBBBAFDABCJEDGB@AJID@DFBLA@BGFCCGBEBAFLZBBBBCH@FDBHBCLDFCREBACCAODGAILKBBNBHKJ"],
                "encodeOffsets": [[112750, 20508]]
            }, "properties": {"cp": [110.33119, 20.031971], "name": "海口市", "childNum": 1}
        }, {
            "id": "460200",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@FDFFAF@DZRRD@B@LLTFDFFABJDLALPRDHADBHHLBJABCD@RdD@XMHDJHDBFFLDBDBHRE@ABCDDBABFRDREBDF@DDLDDADEJAFCFKDCTCVL@BEFBDJBBHFFAHBVCPCDEBAF@JCJBPBFDBDH@HBLBBF@BFJFANBHDFFDFBF@FCHA\\CRHJHF@FGLCD@VODINQLBFAHC@EACBMDIB@JHHDHEJBFFFJBLKVAFBHFJXZBLDFFDLDNDNLJ@NLJDNNNJNZFFHDHAFB@CHG@OCKFEACF@BC@CBGLU@GDCD@@A@CEIFGF@FDBBBFDABBB@LCFETIDCN@XFJEFALEJBFAL@DDFGBSDAFAZCPGFCBECWBG@A@EBC@OCCDMCEIGGIDIEEAQEC@I@ALI@GCGAIGGKFBMNMPE@ADABKLE@E@IBGFCJAJDFAFBDAFBBAH@@CTIHJNFNMHBDCFAJFF@D@DBBBDBDAFBDBDFDAF@LL@CJKJCHBJCB@DBHAD@@FBDLDFEDALFGN@DHF@HN@@LAF@JPTB@JIFAHI@@BB@HER@RDNBLFJLNFBFAB@@FCHDJCFBH@DP@NHHHDCNFNDDRBD@R@DH@HFHGD@HI@MBAECEQFOFENGV@BCJMHGFO@EAEGIAWCGCA]ECC@EDODEF[MEFGFBB@\\«UEQICCGUEmW{C]CgW¡QO]MeIgC_DUDO@QCeMc[YKWEWAUBMDWP_`IDO@}CUDMDGHM\\KJSH×VUJsRħI_BUBQLELIjMlEHGDSD½DAQCKGEGGCKGBGDGH"],
                "encodeOffsets": [[111547, 18776]]
            },
            "properties": {"cp": [109.508268, 18.247872], "name": "三亚市", "childNum": 1}
        }, {
            "id": "460300", "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@KCOLAJBJDDVFRHJB\\JfVXFZBRATGPMHS@KGKOKqO[QUGQCOAGFCZDFLA\\ALHHNLHNFT@JDBJELYAiQaEQESQ", "@@HCFCFEBGEKMAMLCHAH", "@@KDEFShGJSNGJGJIFCF@HBHDDDBXE^QbcR]DICMCGIC", "@@k^AXNV\\AcFOGWMMO@UDKH", "@@HBJCBGEAKB", "@@@DD@BA@AC@", "@@DBB@BCAAC@", "@@AAOHCLAVHPNHZJ|XLRKDKOYm]YEUIWQ", "@@CdNbRNZINOFYIYYOSB", "@@AZN^RHXKH[@WOG]B", "@@HTHJjZLBNBTFNBRBNFXI`KHGHOAMKOOGKIKCeAsGSCMBOHGHMH", "@@hNpJxHfFVF\\BL@PKHYCSOG¯F_GYI[QmOU@cFGF@RNPbP", "@@yHEHAXDNLTTNPDLBªVfLNRARED@FQFSCQ[_MIOG[GI", "@@BEAsKISASfI`DTVRTC", "@@@SEagBKjTZfE", "@@EAUAWDIR@TNNbX\\PVDROCWGW", "@@RaOaa@YTRbbP", "@@FA\\QBEAESUCCOBGD@DBfDF", "@@ICIB@BJHFA", "@@GCIBADJFHA", "@@VuKogEcbEld`", "@@\\c]_gA]TClbR", "@@AIKD@JH@", "@@NOG[UKUHWVEZLNdE", "@@RG^WF]EISKklEV", "@@DHFDRGHGAoOCWN", "@@LRVBxO@a_SUCQJIL", "@@DHPRfVTJF@`KBA@EQWWYuWEACBGLCT", "@@PJHAJ@HWOCQA", "@@LAJKGMKDGD@J", "@@LJLBNIJMDMCIECKAMFGDIV", "@@@BLDNEJKCGIIICIFGF", "@@MGIBGF@HHPTD", "@@\\CDE@IEOKEC@GDEHALDP", "@@Lg_aoNEh`\\", "@@FHJFNABGGKSGEB", "@@b^jFdOVgQcmCkFaP", "@@xNRaMoiQQ`AT", "@@nyBKISUIQIeA]FinB\\FJZNHDFDPARD", "@@\\RXABGEKOKUIMCODBNHH", "@@QwQKoBELARIVLNXN\\AVE", "@@BCCMAEICHYGMMEQ@OLOXMN@RNJVZRA\\W", "@@`@DATe@WAOCKGIq@UFEVHP@\\BLPP", "@@\\EDCBQAEKKKqGE@[T@FBNHTP`f`", "@@JAPGRUDI@KCMUOEAw@GDCN@THTVRNH", "@@lOQe[SeRHf", "@@@\\DHRNPFNDNARCR]@IAKIUECGA}@GBCH", "@@DRNVZNH@TENKBGD_@KMOUII@MDIFKJEH", "@@BhBDRNPFFAF@RKFQBKAMGIIEYCG@QH", "@@BNTX\\RLBHCPcBM@gEYII]CWFILEX", "@@DjHVJF\\DDA@UCwACEA]DIB", "@@PbFDDDnBFCF]AKGI[KS@IDMN", "@@L^FDdHzILGLq@G]_GAgPo`GN", "@@LFHRDN@ROLOHs@kSWMEGBYVGLGV", "@@@JTTVANELGn­HsGSecEAEHOªGN", "@@BjV\\lP|DbI@iK]wccKeD", "@@DHdNrATSFMEWaaICiAEFKd", "@@HLpRLEBMAK]K@kNEJ", "@@FHJ^NRB^EFEFMBc_{ICwBGD", "@@DPLPLHZ@JODYESOMQEMHIL", "@@BNJLLDrBREV]TaRWDSBWCQOG[BYDgVWRITENAX", "@@BDNN\\PF@PCBCBEAUCMe[GAOBAB", "@@BLFFnR`JXPNhCRKASIOoWkMUQ@MHIJAH", "@@LLXDRGXGf@PIPOAOmKWAaDQPSV", "@@BR\\hH@V@VCLEL_DUCOYkECI@UFKD[j", "@@DJXNrRxGFEB_EeEGmQQ@aLGF", "@@DVP\\^PÖfXn\\JFxxXPÜbHH¬äHHŬètVLElWPQ^¯AW[cÛ}w[kWÏAYGMßiŏ³ĉoÓAQBjQLq", "@@JJLHLDfAvWÜ_LEFIDIKEYB}R¯rSVEHD\\@J", "@@BHFF\\LF@dUBIOiII[GEBQPAF", "@@Fr@FDBhJtADABGNyOoEEGCkCO@EBWt", "@@DTÎĂÒÒ|XJ¸@EM²]lQVQXUDSWQyHYF£RJ]@»QkI±çė·­uWOCWHEJ", "@@HnNVLNÐ¦TNrRXCRCHQBS@KecsQM½YAyHUP", "@@DX^NüTFZ@JCJaG[[kyyesKUAMHS", "@@DNnlHBFAfODMAMomKCMAI@IFIT", "@@BNRfHJXAHADGDIBs@aCEGAqFEF", "@@HlhHFnHdELO@MeU_a]WGW@", "@@DJV\\bf\\bJfKDGFaUkIG]CWBKN", "@@BJzjZL@FENY@Ke_uICMJ", "@@ZtHDxDH@vQFCRaAGQ_ECIAe@oBqb", "@@DdXZ`JpBHAYFGFoAGCCkYMAmB_H]NON", "@@BTZR^HXBFKB_CSIQ]CaDIP", "@@BbHLLJRD`CHGDGAKK[GGKE[@MFGH", "@@FLPVHT\\pJNfjxFFBHFtCTGLHtHHJDTBFCT[BK@§k]uYUIIQICNBDNNZbnX^CFGFIEYWQOIUEAGDCF", "@@@F`jJJf^RFJ@LEFC@G¡IEOH", "@@XXPBJEX]AOKEMCEKEIE@MPM\\", "@@DLJN´ldRNEJS@GeWUGSQKKKCQ@aQODKN", "@@BRFPRLLBTELM\\iPuAMQMGBEHQGHK@CCAGP_HWF[GEMCIHS`ETEd", "@@FZVdJJh\\pJJ@`_BEWgWSYOOUBEF", "@@BFDDLDRE^MTKd_JGTYR_FUBKAGK[EEECG@ODCDCFC\\CRa|eXMTUVCD", "@@BNHLPJDJHFVHFG@MCG[QOMKAED", "@@DFDDJ@DABA@CAEKCGD@B", "@@BHFDJ@LCDE@MAKGGIAIBAT", "@@NFHGCCIAAB", "@@@BNFHAAGGCK@", "@@@HLDHEBKAGCAMDAB", "@@HNFFZ`PHJ@JQESWQYKM@EH", "@@XhFFXFh@DE@I[eGCKA[COBED", "@@BFDHJHHJJJJBP@HGBWK[GCQAOBCB", "@@BDhZNDN@NCFGDW@IQ[GCIAWF]`", "@@JVLHLFnFHALS@MCSUMMGQAUBGDKZ", "@@HLFDNCLDR@JLCXUjQRW@ECEEAyGYByAQFYNS\\CH", "@@BPHFJBR@VChWDICMGKEAMAcJa\\", "@@TbTPXLNdRLJNHN@VKNQGaDaGiIc[K[UQSAMDKpDNANCNmN", "@@BHr~FDFATOTs@G]oKIKAEDcjEH", "@@FZ^JJCZ@RaCQKIQCg@KL", "@@DP\\JD@FAdcBMAM_QGAGDIFG^", "@@@LXXBHFDHDHFRTNBPAPOHQCMQAEECIKIMBEFBUDMKMGCKDOJGHCJ", "@@@BLVPDBADKBS@CCCICI@EB", "@@@DTXHFL@PA\\[@GCGYYCAGBg`", "@@BDHHHBHCFICSCCKCEBEF", "@@@NBFFBrHNFbBbI@ECmM[IWCEEAOBCCAGCAYAEBEHGV@PFT@FEJ]H", "@@BLRhDDD@hGNEHYAEK]IKEAgHGBED", "@@PfHDJ@nOFEBWK]GGGCgFMFET", "@@BZlj^V\\PfNVGHWmc_MykUECBIF", "@@DHHFV^J@LWAKCCÅ{GCCDWb", "@@@HFNJHL\\\\LR@PCXGDEAYCCCGG[ScEEO@EBE@GGACECCBCDCJIBELAZ", "@@LLFBN@FADAAMGEMAK@CF", "@@FTDDF@PCJS@OGIE@I@KFAB", "@@JZRn²ÐJFL@ZKTCDA@GOoMIÛÍGCQF", "@@@DV^F@F@RSDS@EAC_KC@OV", "@@BFzhhbbTj`PFfJL@TSBEISceEGDSRYNmGEAes[SEAED", "@@LhBFtxXpFFVDH@FEL]AIQ_gegaeOCB", "@@@RFNJHNFVBLANEHMNeCsCKEEQ@MF[PKNGT", "@@DFDBHABC@IECE@CD", "@@@FHFFBDEBGEIAAE@ED", "@@BJDJj~HHJBJBLAHEFEBGCKQwKQKOOMGAOBEFK^", "@@BZBDNBFA^]VUBEAEEEECG@SBWFIJ", "@@BVBDFFVPPBJ@JCHGAGY]YKEAE@GF", "@@BJHFPATIJKBIEOGCG@EBUV", "@@NVPFjAt@HATQ@CGYACGAUAwD]BYV", "@@@FDHVRlFHAFGGYGGUKM@YFAB", "@@FrNTNFLA\\IJQDkCOGGIGKC[AKHKP", "@@DVHH^DJ@\\KFCBKGuCEsGGBCDKn", "@@BRtRJnJCc^mCsMKIA±DÓZSN", "@@BnDTxHFND^GJCBCJeASAIY{qikAIB", "@@D\\bXHBHATEIYCEYKUEI@AD", "@@bpFDHAHChU@E@AE[LG@EAOKEAEDSbCL", "@@LZJBhNePeAUKI]fIVYbCNCZ", "@@`jlRrA`_@ca[qI_Lid", "@@HNPVXVNBRCVMFI@QcEGWEUAIFUb", "@@NHLPHRFNCLGdgNUTYTMrSnUHQFUCYECABMlGJ_J{XIFMLQZgvIDOAIIKc@cB{FcLILCC¸UDCACCASC{A¥BU@QLKPETA\\", "@@B|hL\\HÆLPAJCFI@IEGQI]E¥K]IqS", "@@@ZP\\RPbFXBjCTKBGEGkeI[BGF", "@@BFhNR\\BpC\\WBECEMKGAoD@qHCB", "@@^JbATYMkg@]\\", "@@BHLTJBRBNABEBSCYCEaKGAED", "@@@FFJLLdBF@ZGDCHMAC]KiCEBMJCD", "@@@FXXdADAHEFQASAEEAiEWZ", "@@@DHPJFFBlGTM@ACSACMAE@{TAB", "@@FZLRFBF@^U@CAEWYG@UDCB", "@@DD^BH@\\QDC@GWUCAMAGBCBQh", "@@FDTDLAHCPSNYHIRMHIFG@GEEKAo@IDINOZOd@P", "@@TLNFNBZBbATCFGDGBWGSKIYOSCiCUFIJERAJDX", "@@LHJBHAHADCDG@CCEGGOCE@IBEFAFBH", "@@IMQMICODMJCDADBFHLPJLPNH\\DLADCBECI", "@@FHHFTBNAJIDGDU@GAGACEAK@]NKNAL", "@@DHFDN@FCJSBGCaCCM@OBGBADAD@FBL", "@@BDDDFDF@JAHCJGDMAuCEE@KBKBEDENAj", "@@QRI^JfRX^JPBZEZSNY@YSYUM_KWB", "@@kZWxPrlRlHtB[RcKeQ]i]iKg@", "@@DFNHX@NGDGHSAMEISGOAKBKJAT", "@@LBP@RAXCjSRIFG@EEEECaCo@KYDMJAHAPFJHF`L", "@@EDKP@HDDDDH@JADBFLB@B@BEACEG@AB@DBHJD@BABAQUQK", "@@LFTBHEBQGQQQaKMFCNJVNL", "@@PFLAJCTQBGAKGIMAWHIJCNAJ", "@@TL`LH@HIBSGMSMKAQAKDEJ@J", "@@lNZFJ@LAHEDGBQISIEI@YJODK@QCM@ALDH", "@@HJHFJDHCFKXYJQHaCMIAQAcNGFENER@N", "@@FFF@BC@C@ECAE@ABAF", "@@XR^HH@DE@CAGGGKCIIECQAGBCDAH", "@@bXHBFAFCBGAEYQ@ECCIBMHCF", "@@BBBA@AA@", "@@BJJDZDPCLIJKJgAEGCGBGFKLSJEHOL", "@@DVFJPDRLL\\AbCNGHe`CPDDHHJCTIZYLGRQDOK__uKKQQQGGB", "@@L@DAHG@CACKCQBODADBHDDR@", "@@PFJ@FCDG@IAOE@WNGDAH@B", "@@LNJBNBDABCCEECIIKCE@ADAD", "@@DFJHDADC@GCGECEACBCB", "@@DFDDJDF@BC@AGMBCHEBAAECAICK@CBAD", "@@DFJBT@JEDE@KCECAE@CBEFODEDAD", "@@AJ^VHBFCBMJALAFCBMECE@IFYBSA", "@@@DDBF@JC@EAEIGA@CBADBD@D", "@@DJDDF@FAFAFGBEAEAA[ECBADDH", "@@PXHVNHVHJALOJGBIEWWQEGIEMAgFIF@J", "@@VHDAFG@AQKI@ODABBDFD", "@@NBJAFCDCAEGECECAODAFEHBF", "@@FFF@HCDGBECGM@GH@H", "@@CDBFNDXBXEDC@EIIEAIFQD", "@@AH`Pd@xJJVGFQIa@SE}EUBS@IWUCMJ", "@@DFJALEFG@ECCOCIJCH", "@@HBHAFCDGAEGCKBGH@H", "@@BFDBD@BCBCFOAAEAE@CDAJ", "@@@JDJDBDAHMLM@CAAKGCBKN", "@@BNCLBJLPNBHEBEJIDI@MQ]IGGAG@EDCJ", "@@@JFFHBH@NQ@CQKC@EBCJ", "@@@DDBB@HGBCACCAC@CH", "@@FHFBFADC@CGCCEIAAB@H", "@@@JDDDBFABC@GCEECCBCB", "@@DBRAJA@A@AGKOIGAE@AD", "@@A\\FLH@j[PB\\JD@BEGM[[[MWCCBBPCF", "@@JPPPHDL@RCfKRBZIRIFOBO@K[[OMSIKCMH[B]HIJKRCN@Z", "@@FHLLLZFBFABEDSFO@KBeDIHIBEQMKIKCSFIHEZIVBFHJ", "@@PAPKEgcqOcBSRCj@JÀZPKD_EQo[¯a{IuCXKRCpDP", "@@BFDBNDXEDEACY@KCCBAB", "@@\\@JBNELKJS@GACKAC@KBSGC@WXIP@FBF", "@@JCRYBE@ECCIBAHCFEBADBHABGDAF@DB@", "@@FDhPNBHAHGJSBM@IEIMWGEICI@MFGJYj@FDH", "@@JJTDt@XGHGHYBQqQES@OJILCRARFZ", "@@DBDAEGC@@D", "@@PjFP@LCFE@KAMEKMI]S_KOAMD_XGLANDJ", "@@DDF@FADABGGMC@E@EDAJBD", "@@DBF@DADG@KAACAMDAFBJ", "@@HBH@H@DCCGGCKCYQEC@KFA@AAIMEABG@A@@EEAG@ABADTZRTXV", "@@LHL@D@FC@EGKC@G@IBCJ", "@@RJL@JANDNDHDDBjALM@A@C_O[EK@SFSBUHAD", "@@@JHFHDLEFGBM@GCECCEBGJED", "@@HEASCGGEG@QFAHDFFDBFDJJB", "@@@JDFLBHAHGJEFICIEEIEI@KDCH@J", "@@F@D@FCDG@CIGGACBENDH", "@@FAFCPM@ECEYEG@CNDNDH", "@@JHD@FCFEESOME@CDADCLBDDF", "@@DCBFrXZEHIIG§CICIKG[AMFCF", "@@RdHFtHPANCLI@OEMUUmaICK@KBGFCJAV", "@@FADEB]@IEEICcBCBEDAJBLFJHFJD", "@@FFHBN@NEBE@GACC@]@EDAF", "@@LFH@FENHXFDCAKQOSM[EoawkGQLQLENATDTJRTTPbJnHJBHEDOACSKiE[KSQq[WIkEYFQLCRHrPZt", "@@GBAFFJFBnBLBbJTLFLDTANINIHUDS@GEUCCWDYJKBABAF@DLDZ@rC²XPBPCPINKPaBMI]a_iUaGUAMB", "@@FBF@BEDA@CEAABACC@CFAD", "@@BBJFP@LCJIHUEIMAMDKLEJ", "@@AJBDFDHAFEDIACICEB", "@@FFJFFAFEAGECEAI@CD@B", "@@@FDBLBVADEBCAGGCKCIBGF", "@@BPNRDBJ@VAVM@C@MCIKWCCO@UFEHGP"]],
                "encodeOffsets": [[[114139, 17488], [114143, 17487], [115046, 17318], [114920, 17162], [115340, 16968], [114394, 16944], [114402, 16941], [115208, 16862], [115350, 16779], [115376, 16724], [114662, 16716], [115108, 16687], [115177, 16386], [117685, 16422], [117546, 16276], [114928, 16073], [117361, 16025], [117008, 15924], [120664, 15498], [120647, 15482], [120115, 11344], [120516, 11315], [117327, 11037], [120028, 10993], [118561, 10794], [118504, 10717], [118537, 10713], [117128, 10447], [116768, 10265], [117331, 10198], [117292, 10125], [117334, 10121], [117045, 10091], [117199, 10052], [117468, 9971], [115666, 9869], [115213, 9774], [116907, 9610], [118761, 9546], [114208, 9500], [119552, 9274], [116674, 9088], [117547, 8357], [117611, 7419], [116327, 7130], [115256, 6123], [114700, 3943], [114916, 3974], [114943, 4040], [115229, 5934], [115172, 5878], [115047, 5757], [115162, 5626], [115224, 5792], [115286, 5696], [115315, 5497], [115259, 5233], [115355, 5230], [115618, 5113], [115935, 6458], [116629, 8198], [116840, 8294], [117257, 8316], [117423, 8408], [117626, 8176], [117708, 7690], [116631, 7790], [117932, 8588], [118025, 8714], [118282, 8695], [112092, 7521], [112575, 8037], [113111, 8312], [113112, 7987], [113264, 8204], [114217, 7726], [114351, 7835], [114232, 7996], [114319, 8097], [114612, 8265], [115602, 8033], [115656, 8612], [115985, 8322], [115940, 8268], [116389, 9453], [116366, 9193], [116935, 8975], [117350, 9059], [116713, 9086], [115563, 9760], [115582, 9803], [115601, 9815], [115638, 9855], [115647, 9865], [115714, 9887], [114383, 9538], [114139, 8730], [114901, 9048], [114939, 9088], [115043, 9141], [115239, 9059], [115532, 9125], [118618, 9943], [118831, 10338], [118941, 9810], [119266, 10046], [119065, 9093], [116999, 10061], [116324, 10487], [117089, 9988], [117369, 10205], [116976, 10393], [117041, 10421], [116985, 10488], [117286, 10501], [117443, 10595], [117318, 10662], [117608, 11086], [117450, 11269], [117320, 11593], [117217, 11097], [117241, 10975], [117442, 11745], [117311, 11010], [116929, 11294], [117669, 11124], [119985, 10861], [120455, 10884], [118622, 11107], [119438, 10757], [119637, 10729], [120073, 10569], [120165, 10333], [120082, 10949], [120598, 11033], [120269, 11331], [119831, 11331], [119529, 11778], [118131, 14284], [119496, 16738], [120534, 15547], [117457, 16559], [117196, 16419], [116955, 16426], [116674, 16216], [116627, 16047], [116445, 15975], [116594, 15849], [116718, 15790], [116977, 15806], [117205, 15974], [116691, 9053], [116500, 7821], [117302, 10182], [114910, 9080], [118496, 10787], [118482, 10760], [119225, 10034], [115706, 19940], [116565, 19619], [116844, 16389], [114927, 17405], [115039, 17227], [115597, 17187], [115428, 17077], [113865, 16169], [114176, 16847], [114254, 16879], [114265, 16901], [114280, 16933], [114336, 16963], [114371, 16963], [114372, 16986], [114421, 16854], [114392, 16849], [117134, 11742], [117095, 11726], [117075, 11704], [117044, 11663], [117543, 11420], [117058, 11319], [117000, 11341], [117026, 11320], [116805, 11180], [117110, 10628], [117158, 10638], [117226, 10628], [117094, 10421], [116579, 10260], [117138, 10138], [117073, 10127], [117022, 10092], [116997, 10004], [117019, 9946], [117142, 10031], [117240, 10088], [118603, 11077], [118583, 10988], [118135, 10502], [118050, 10437], [118274, 10155], [118207, 9620], [119285, 10646], [119315, 9976], [119355, 9980], [119394, 9970], [119253, 9395], [114338, 8881], [114610, 8852], [114444, 16448], [117283, 10971], [117171, 10929], [117097, 10989], [115689, 9883], [116524, 7551], [117267, 10171], [117254, 10160], [117205, 10142], [117261, 10110], [117209, 10077], [119734, 9690], [117371, 11707], [117418, 7773], [115986, 6518], [114385, 16599], [114330, 16646], [114417, 16587], [115732, 9895], [115730, 9909], [117049, 10113], [116962, 10456], [116960, 11327], [117745, 11345]]]
            }, "properties": {"cp": [112.34882, 16.831039], "name": "三沙市", "childNum": 233}
        }, {
            "id": "469001",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@AFSLKEEAK@IJKDKDANQHU@YJQDCbKDABMHMDAbAJYRFRADDBJJDF@TKFFPBREF@FFPHFFLALFNEFEPDHCFIfEBA@ECEMKGCKBGAUSAEBIHKHCHGHGBCBKAKAQ@OBCAAKCc@ECAECEFMJI@EIEEI@CFMKIAAHEDEAIBCHIBIJKDKPa@CCCAOAAAAIDEAK@MHKBEAGAIASBKEKB@IEIAGECAC@EDIEOCAGDCAIQ@EA@MJEFAHGDADE@CAIBIRGD@HCJKDK@AD@HDDJBD@H@DTAJKDCBICIDG@@AD@@EGEQGAKIEEOEGCAKCIG@EFGJaACCCAGDEHMDA@EGAOAAIEEI@SJiMI@IBMACFK@EFI@KDCBKMCMEKMMICa@CBCJGDEFGLHhAPKLE@IBAHCHEFEFONIFKRAF@LAPBHFH@DGRCPBDFB@DIP@LBFDBHADBED@B@JEZBJEH@NHJDLFFARBD@HFDBFNJDHADYbGDI@QFDFDB@DG@HF@DIJ@DBHILAHEHMBEJFBCHBFBDTLBJBFPDBFVEFCDGDCD@TJFD@LBDHBJHJ@TNHDAJNTNHHPDBNALBHBJDPBFDDHFbFZDDFCFEDALBVHRGJ@HFJAHA"],
                "encodeOffsets": [[112153, 19488]]
            },
            "properties": {"cp": [109.516662, 18.776921], "name": "五指山市", "childNum": 1}
        }, {
            "id": "469002",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@o·}WyocGcQÉ­FUBKFCHANC@EBAAKCGFSWIQKEE@GFQTOJQ@OKHaKOOKaAQGMGOG[S[KmMWCACC@@EBCAGBGAAACE@@CCAIAM@IEE@EAA@CHC@CCG@CKII[MMDQASIYEIHMTAFADADILECGEIBGAEBKEGBEFBLDHAFKBEAAAAQHMAGA@MAIDGRMHEJA@CCIQCJEFADDLFH@BGHQDINAHCBEBIHAHGBGZFF@JBFBPGf@^KlD@PPPTLT@P@NHNEZDPHLJ@Z[NGRFVJZHRHNDT@EZJ@XFLCZQL@JBJHJDZINB`\\RBJEFEFCJBHHDPCJGJCJ@LDVHLDDZDFJ@JALCLEFUHcTCNLTDP@DFXLJf@FFBLCP@PLTPHZBHBNLLXHFHAFCPCHFL^HJNNLJLBN@VIL@JAHDFFDRJNLJJBRCTEPDVDHcFITCJCPULW@QEQBGLGDKEiBKHK`KRH`VCXBJFPDDJANGFPJDLBPCVG"],
                "encodeOffsets": [[113388, 19844]]
            },
            "properties": {"cp": [110.466785, 19.246011], "name": "琼海市", "childNum": 1}
        }, {
            "id": "469003", "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@EGICEEDIEKDKEGAODIHEAIQMEKSUMGGKEW@EHGHAR@D@DEAQ@KCOBOBEHCBELABE@KGQE@GBGFIAACFMAEEBIAKAIGUHONO@GAQCSKK@KDGAQECEAE@CJGBC@CCCASLMIUBIDAJCFDL@HCHFLADEPB\\A@@CC@CFE@EFBDDF@@IFKDCAACCBABK@SCOIQEMGGCMAGDEDCHSBKDGAuCGGGAKEECEAOGIAGCKKNITEVCDEBMEUCaCCLSNQTAXAF@ZABKDIAAAAEAGE@GGEBCHCRADGHAHABKFEHEBAD@DGHEHAJGDADEPIDCNE@GGMAMIKCGCC@CFFB@DKBeKCACA[HBBFJDLBDTAAH@FHDBPHFFAFBAJHL@DC@CH@JFDH@DF@DCFEDG@@F@FGDELIJAFNLAFEDEHAFC@IIQCKBI@EGQWEMDOEEQKEEKEABMDCDGEC@G@IIGDEAE@KFEDDD@BEFADBF@DIDABEAAAA@CFEFC@@AAAAFE@DE@EEGCB@FA@CCCA@HABCEIBCRINIBIHA@EEA@ADBDAFCDAA@CGAEKCDAFABAC@CEEGD@HCDADCDA@CCBMAGC@A@W@@CFC@AAASB@ABGAAMFEFAHOAILM@AEC@A@AHA@IE@ECCO@ABEJQLGBOEECE@IFGJBH@JHNZRGP]AUBEFITINOFGFCHAJKTEHIACCAKCEEAEHEDGAWBIFCHUJODW@GBG@EEESB]NWBIEQMIWJWMGCM@KBGDEDBF@HAFCBEPAJDB@BABGDCDE`OBUHENGHKDIAEACBEHWvTVXRtX|lXhN\\Xj^b^NXHhDRDNLZ`DN@HMbELCLBd@PP^JJPHlTFHDXDFV\\JFPJL@PCFBPJBNFN@bFLDBF@LALEH@BBAJDHFD\\JN@rKFAVUFAJ@JBN@IQĘyPEDIFe@aAU@KJgDKHEXCJEHUAOAEBYAGGI@EGCKDBIKGIIEAKAKLC@@IAMDIDEDAJBNY@OEEXOJUIMAGHAF@VJJOHADEN@DCJJXBF@DCFID@@FFDBADEFBL@DBNAJB@ASEIMBEAIJACGDCBCAADGBD@JHK@AACF@@CF@@GBAAFDBEHAF@@JCDCBCBB@E@ABAAAB@BFB@DGB@FEBBGFADBBD@@EDABBNABEJKFAJJRJREBCJBIHC@DB@BFGHCDFCBH@BHBAAECCAEK@FGFABCDBHCL@DAJHJB", "@@MEGBID@FDHRJNBP@dEjIHGBCACICGIC@KBCBI@]JCBAFM@"]],
                "encodeOffsets": [[[112404, 20049], [112059, 20391]]]
            }, "properties": {"cp": [109.576782, 19.517486], "name": "儋州市", "childNum": 2}
        }, {
            "id": "469005", "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@FHFBBBAHBDLBDB@DWBBDA@ECA@AJDBDAFDBDBBFHHDLPJBFAFJFCAEFKLETBF@HFNFDFELCZEH@DDHXNBDAHIDIJAFCDM@WEIBGRBFLJBFAHCVIHBFDNEJEDCHEFAFE@MLAAC@M@BFDLK`CBC@EH@NADC@EBAFK@IFWHGFEB@BDF@PCLMPIHMFEFENGHEB fjRPPLXLXJLDRRTTTRHDL@HA\\MLM`³N_JErETE\\SRWPUZSlQbGXCPVL\\H\\ANGJKFOhÉtý~ñrģFmEUMMWIQCASE¥{{gg{qiiQGOEuEEAIM«ZUHODKAICEOMHIBCCEOAIDW_UQGODOHGLALFjCLKHAHFR@RCLKTKNIDSDEJGdHHDTAJORGFeXMBK@mQM@GDCDCJC^BLJJLFNJHNJHLDVDLHNKB@BFFDXANDCI@GAEAEAACICCBEACPBD@FCFKDCFAD@FCH@FDH@DB\\DFBD@BCJ@FADBHA@FDDLBFCJFF@@BF@DJHBDRAHBHCBEA@DFJCDENBL@\\BDJHDJHFFNHJBFCJDJCFDDD@AHLBHFHBFF@BC@UACBADCDSBGAGDEAONEHBF@NEVHHANCBGCI@IDBDHHHADBF@JHLAPDHADF@JCF]JCBAJGLAFHTHFDBDDDPFJ", "@@@HJD@CAAFK@CA@KH", "@@BDB@DBB@CGE@", "@@B@A@", "@@B@A@", "@@FFFBAGEACB", "@@@FB@AE", "@@BBAA", "@@@BBAA@", "@@BDDAEA", "@@BBB@AA", "@@BHFAHK@ECACBCDCH"]],
                "encodeOffsets": [[[113296, 20243], [113943, 20459], [113936, 20444], [113935, 20443], [113930, 20442], [113924, 20438], [113872, 20402], [113873, 20404], [113875, 20391], [113886, 20359], [113885, 20360], [113871, 20387]]]
            }, "properties": {"cp": [110.753975, 19.612986], "name": "文昌市", "childNum": 12}
        }, {
            "id": "469006",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@cšO@cFqDa@_EeEQMWWU_O¥[AACY@sHA[AEGCOAŁcI@KBQTY@WsW]QdWBK@KBEDAJC@QBEGMEGIKCEFIJEBOZCBKAG@CBYVGNEB]@KCC@IFGHGNARMJI^@HEV@RDJBFEX@HDL@N`JBNAF@DLHHPJ@NID@FDHPJLBBH@BDEHDRDBNDDBRRJLBJENKNGRALQXUTKVW\\FJzXTJPFHDLLDLA\\FPtPPAPBFPPBFJRDDB@FINGHQJCJ@FBBHGN@PDDJ@H@BCEQBEDCHALFFAHBJAHFFDJKBCBCBENSJGZFTJRBNC\\NJJDLH@BDF@DGB@FBF@JFN@JBDB@DF@BDBBAHBHAD@FD@BDXDnN\\L\\TPHNHRHbBPLLPGbPLR@PIRSHEF@LFJRTXHELDBBFAD@BMDGLEVA"],
                "encodeOffsets": [[113266, 19543]]
            },
            "properties": {"cp": [110.388793, 18.796216], "name": "万宁市", "childNum": 1}
        }, {
            "id": "469007",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@BEE[SESBQEMOKGGIACAmAEKKSBSACCAECAKDM@KDMBKFGEQAECKOAEIKIDQBC@CEEAKBOHQCEBYBwOUIIGSKQQmQ_YccM@]DKAKKGFILOPKDOG{@ICUMGCTI\\ejqrapI^A^@TDTL^pp\\ZDFHTMäADaXIRUK¦ATôJFXNZbtZVYJOHUAEDKHCDE@CHKDETOBEBCDKDGJGNGTEXCNDJAfMxOD@LHFBX@LBJDPLRDFCHEHMJCNAJCp]\\BDAROPEJBJDNB`CLAHGHIDKLKBaHYFKNOFEJAL@NE@AIKOAEA@CDG@ERGF@NDHCFGBGFEDS@AEBCCEICACE@EDEDKAIICCEHIEa@EVULDREFDFH\\@FA\\QL@`GL@DCRuBA@IDC@EDYAIDICI@ECC@CGKAIMS@YMKCQBCBCNCPMDEDIDCNELI"],
                "encodeOffsets": [[111745, 19332]]
            },
            "properties": {"cp": [108.653789, 19.10198], "name": "东方市", "childNum": 1}
        }, {
            "id": "469021",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@HBDA@AEEBEACJADMFE@GDABEAEEIWKBG@EGIAEAWAMBC@GBCHCFGBMDC@EDA@AHBBCACD@AABCAEBA@ABGB@BEDBBCFAHBBAFFLADB@CBAFDFABAEICKBIFKJEJAHGF@H@RGFBDJ@DCBFHL@HCPCDB@BFLPFBAHCJGN@BAD]BAD@HCHE@CKGUCKCIGGMMIKEIIAKD]DIDCHCH@F@nRL@NAfWHEPQBICSGGUCOCSFQDIAKIIMCQEEGCIBK@UJM@KAKIMMGIK]GEODEDGBGEKWMKGAYAOGKS@ODOAKEEe@KIEW@CCOKSDMdSVGFEDKBUEIYCCCGKCU@KDIHIDICOGGIAEDEFIFQA_[MAYJICIGIAK@YRKDWEI@DXC`DTBlDJCDBHDF@BEPABEAE@CBAFMPCEM@SGIAEHCDHJABGBCBCJBDRRBFAJEHFHKFIEC@EFCHIH@FBNCHAHCHCPHJB~LRZTJNLHRAPGTCPDJR@jBLNJRALJ@LIRORIDKBOJO@IF]NAD@NBBFBDB@DEB@DDNAFCLBN@BEBEFCHBLCDG@GCEFABECCBKKABMCAADCAGBCGA@CDAICBAGCBEI@CAACCA@EA@IFAJCDADBRTD@HI@@JAD@FC@CCCCACE@CFCFBJFFDDRHHJ@HAPKXGXFHTBHL@JHJRFNEB@FARO@CCEDIAEFGF@DA@IHAXKJOLDDAJEDKD@HDBDCHGDCJFFDHFBHJN@A`DFNHNBHHALJVAHBJH@FDF@FCFHRBJ@DBJALEHCLFDDHPDDFJPDFBDDHBNGDAJFDAfCDFBP"],
                "encodeOffsets": [[113028, 20202]]
            },
            "properties": {"cp": [110.349235, 19.684966], "name": "定安县", "childNum": 1}
        }, {
            "id": "469022",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@HCBFDBBDDBJ@AFHDABJDCB@DHBADBHCDBBNDBALLDAFDBAFEHDH@DCAKDGFEFA@AAMDKBECM@CFA@CCAEAAA@MBC^MJEP@PILAJCPQJQ@KKIQBMIAK@iIQOCSDOHQBKGIMYSKQA}GIDODGBGDGAM@EJGDGFED@JFLEEGFGBIAEQQACDIDAHABAGIDCFGJBTHN@DFNOBEDAF@FBBAFO@ACEAGDCCIAkCSD_CWFYS@MCQGYGUIQEMHY\\I@GKCOFYGM@M@OKSOSOOC@KJODO@S@eIQAKHEHAPGPSPCDCJDHEBAAAAQDEAGFCAI@CHEB@DBDEBAFCAADa@GA_CGN@FBT@HGNKNMLOFMJKBKA_AQRcnEFGDMBM@CCA@MLQBQVDdDFCJDHD^@DGDFHHDHFF@LJ@VFPLTPJJBJC@DDBDCFBHIHGJ@D@PNRBJJ@FGA@DC@@BDDJBBD@DELIAC@ADFBJBFB@F@NDJDBFED@RDNAFB@DGLICEBGB@FBFDDF@JH@LJLCH@BLBDB@DIBKN@BDHALVBZFXA`KRANBbFJCJEDIDYHKNCTFTHNJDJ@JGNDPRJLBdAPDPJAJCHILBLDD@FADEFCAABCACBBDDDCHEFBBAHNDD@FABABB@BFBBBBBADFBJHFAJ@BA"],
                "encodeOffsets": [[112781, 20030]]
            },
            "properties": {"cp": [110.102773, 19.362916], "name": "屯昌县", "childNum": 1}
        }, {
            "id": "469023", "geometry": {
                "type": "Polygon",
                "coordinates": ["@@nwLIAGAMLAJKHBPCDBBDDAB@BGBICEDKGACA@EDGAAAAKYBEFAHADDHE@AKBEA@CJCBIA@CHIFADCBBEAAEAACG@ADCBCAAE@IFINKJ@FG@CMEECEIBELCHGAU@CDE@EQBGCE@@ABIDCH@NHLJFB^KBBNDDDBA@AFSGAOBGG@ENAJBHAXQBQDE@E@GGQBAJgHI@IZKDCCUFKDABACAEBEMME@KEEAIEC@ABSJAR@BIDCBAAAEMASGEBGLIF@VJrH@EIQBKGGMAICEE@cM@GIEACGEEDIHCDGACGCC@CLIFCBKCIPWLGB@JCBE@EHBFCJDHQREBA@MFQEGI@IGKSAEGHWLWBO@GGIQGCCEEAIDEDEF@BDDDDDD@@EBC@IJ@@GSCAQBCDCBIBAAAABI@EBIGEABCAAAAEA@AAAABEBC@MCBGAAFEDGCCACDADBBADBFEBC@ECCAKJKDGBIOIOCcBKAQICOHM@ICIMISGSEMDGLCZCJIFIDaEMAQB_LWBYEUABKCG@ALMJA@CCAKA@ADGIK@KIGE@CCAE@EHAFAJDHK@CEAMBQCC@EFCACI@M@EEAIAEABCD@JBFK@CACIACC@AD@@CHB@EIIQAQMI@C@EHOVIBBL@JIJGBCBABHJADEBEEBGCGGEOCAI@CJCLGDABAACIBGIA@GJC@ONC@ICIGQAKKMAECAMI@AHGBE@EHEFABDJKPUFY@OLBFENBDJBHEHAF@HR@LAFKBAFGDAFAPDP@LBRCFC@Q@GBGH@FFXHLNHTVFLRNBJGFCJBPFHCLFLCJFFJDDFHDFHBHJNHT@FDBH@FGLGLAJBRELBPJCH[HENBJHFLJDDBPFHNHTDLFDJ@JDNJR@VBPFL\\`HLBXFNCNANJBBBFL@JDJDL@DEHGDEJWJADFT@JFFJD@DCLUF@FDJLBFBB\\KDI@CJCBMAGBORQDHJFBDFAHKPLBJALPFQDAHBDC@CHABCFBLNHV@^BLYFIRc¤ZFPBpCbK`OZBT"],
                "encodeOffsets": [[112750, 20508]]
            }, "properties": {"cp": [110.007147, 19.737095], "name": "澄迈县", "childNum": 1}
        }, {
            "id": "469024",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@X|VLR~p^\\NJNDP^@^NTRJDNDP@TCN@dHL@NCTK^cZUNCXAPBLDZRNFNDR@LALG\\Kd£JQZEAK@]GUKMEAADGB@DCDGACBERKOIBKALOBGCEEAGIRCPQHANBDADIJ@LCA[EAKACI@EVEDK@CICEE@IESBCXIFIHCFG@CCKCI@IEKAAIABMDMEMAWGK[_EKAO@UIQCM@ICIKESCMGEGAOCCKIGEAIFM\\GDGOIKAQFIAKBKHEHG@CA@EGSIMAGEGEAOAIGCBK@GDCAADEBEHL@BFDDBFABAGG@DACEGDEH@ACAD@JGIAADQFQIIIEBILAFMBAACB@FC@AABCHEAAEFA@CHA@AEA@BBAB@B@FAAADCDIDBEFGCABEAB@HE@@DE@BD@BGL@IACCHBBADCDDHIBBJAFJNTF@BIAMBCAK@EACFABEC@EC@EJCDE@WAIICDM@CFGBIPUIE@GBBHJNIVWPFF@PMZIACBCFCJBN@JD@LKLBFBJJLHAJLCHD@FHJBHAZBFBPGVIFWDGFCLIhDxGrCJOF"],
                "encodeOffsets": [[112127, 20351]]
            },
            "properties": {"cp": [109.687697, 19.908293], "name": "临高县", "childNum": 1}
        }, {
            "id": "469025",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@PCVIDGJEXAHBFCFGFBDFBLDDJBFGLSBIDGHEPEJMJSFEVA^BHOYQGM@IAGHIJEF@FDPFHARKFIBAP@DD@FJFB@BGB@D@BFN@JKPBBGFENEBBAH@BTABB@BED@DX@B@D@BHANDDB@DCBCDC@GHCFF@DBDBABEDCFLHB@DBBDCBEACBCB@FFB@JGJAJMDQJADFBA@GDBDDB@@EDAFH@FCFF@BEBB@BD@FEDEB@BBFBBAJC@CAEBCFE@ACCFCLEF@FBHCJJH@D@HFDCNCBALFFFRLFFCPFNRXFHJ@LARDJJD@BEFGFCBEMKBEJIFKHC@E@EH@FCDE@CCEG@EC@IDGD@@CGKBIEAEBGEAOGC@EBGSBACCKEIAA\\GDBDBfLLA@CEADED@HDLDNJNBHHF@DMJCFOBCHCBIFGHG@CBCFAFGLEBABGHGBCDQDGFAHHF@BHBFBBJBNC@[BEBWRSTMDKrFTHFADAFWJSLMCKJSBCTKBICQDKACY_YTW@IGGMAKBMAAICKIOCIBE@EGUKEG@EJ]CMGEEAKAw`OFOBIAGCCCEECE@QCMAMKCIGIEKCMDGEI@QHUGKAEBGHC@G[EaCGECOAICGAKAMBCAGOMGMSBIGCSMI@IGGAAC@G@CECSIEBEJED]HMJKCC@IFeLKFCCIDS@AHBTILADBBDFJNBD@FAHEDCFD`AFCDBJCFAHCFDLBNCH@JKDKECBM@KFINMAI@CDGDGCG@IRKHMDIAOIGAGAIBMtKXEHANFVCLIJk\\KNM^ETBLXnRrBNBRIPGHGJKLGTADIAGCK@SLKTCTIL]@QFKFSRERBRDHHHJL@VIVCNCjBNNJFRAJMXA^FTFFH@HAN@"],
                "encodeOffsets": [[111689, 19955]]
            },
            "properties": {"cp": [109.452606, 19.224584], "name": "白沙黎族自治县", "childNum": 1}
        }, {
            "id": "469026",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@ASDcDMJU@UIKGGCGAQFQTQLERE^@JKDSLSTKL@HDJBBCHSLKHIHGJOAQAMQqWmAKFSN]LMl[JIDKEUBMFGLWNsJAHBHBPJJBNCLGJQH@HDHCDCJ@NBJMLEN@DALFLC@IDGAMCKDEBGDEAIDCBEC_DEFCBG@EACMSACLMASBGT@JC@EGOG@SUMCIGGYB[AAEAKAACEAMCOBQAGGECKDOAYNEDCHKDKDS@GGSBKGQ@EQQ[EEA@MLMFCDCJCFONMDADADDRNL@ZNTBJHL@DDD@FDJCJBJCZ@FCD@JABQvCDK@_HK@[REB[@EGECQFKCUV@FFbGJDFJDBJCLCF@FDFDBFJDDFA@BCTEFAHEHGDMCE@QH@FCH@DFBPBJL@BMFK@IBEFMPELGZAbKLCLGJGHKB_DMAICIAOFQPCB[Ao^IDMBIDGNGFEDQCOKICKAW@EAKGC@wPeNIBMCWDSFMHIHCHCLADAFSPCFGL@DCFGDCLBFGVIPUZNVZ^`N\\LXDBTDdRNNj\\XbNhLZLjXuFGDAFBJBLCHGFMVGPAF_DCHCBA@ACABIFODABE@GAEFCHCLAN@HDXNNC"],
                "encodeOffsets": [[111662, 19897]]
            },
            "properties": {"cp": [109.053351, 19.260968], "name": "昌江黎族自治县", "childNum": 1}
        }, {
            "id": "469027",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@EAGBIEEECMGIMIMMICMKI@MKMCQGCEAKWYEIAGBELUAKEIEEIAGFGCIGA@CJANBD@FGDEBKAMRCJUPC@KDEHE@IGQG[DGBEDE@EAECCEAGBMIEAEE@AAAK@GCGCAAEAODI@IBEFADCDOAUBGEEAGIAACFE@AUKSDCDELEDIBCFCBKCCCE@ACQFQCAEABCCAD@BQFAGACKCEECAIGGCWNC@QcC@ADIBKAGGCAGBQCKOKBICBAEEECKS@K@AQCYQ@CBEEEECw®apIFCBsBTqTkJÇDkHePWNQXIZGtChDbÆNIHVNJD|@PHLCPOJKHELLLB^CN@dd`ZnRRRTLJHVJxPZAFARDPGLAFBDFD@RAJCJLBFLPFDRBHFLENALCN@LCDBBFDDTBVAJLBFBnBDHJLHNPRFTATFF\\AFHFR\\FRP@NHTAHHT@XGDGFCVKFANBJCFBJJRBPANDFBDFPBBFAXHZJHNDTVH@B@FP@FDDLEfKJED@LDNIHAAEOCAEAISKCIDGEAFINAFGBGJKAGJOACECF@BAGIREJ@HCZaBCCGMIAEEC@GACBQEECKGI@MFGAIFY@I@AFCCAGBCAAE@KJO@CEAACDOHQ@CEGAGBO@KBELQJEPMFEFEDGBGJAF@LKBOGgHKFEHCDKCG"],
                "encodeOffsets": [[112031, 19071]]
            },
            "properties": {"cp": [109.175444, 18.74758], "name": "乐东黎族自治县", "childNum": 1}
        }, {
            "id": "469028",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@@MCK@GFWAECI@IF]@GJ]NIBQHMHGLEND^@FAHMZUDAH@LBDAPYFAJIFELDHJNFFHRAD@BIFCLAL@XAcµaQe_IKQaM}U»GOKQSK¡aOA_BSFuReFsBË][[¬A@EAEHNFE\\CFCP@FDD^FDBDHBXHJBF@FEPGHINADC@Q@MHEFEPFRFDJAH@JJJAHHD@BE@EBGHAFB@FDFDELCJDNTDJALCFBNPHD@FHDB@LDF@DCHEB@F@DQCCAC@CDI@EDANAFEDG@CAGD@@@FEBEJDJ@NAH@FFXALLDHHNBJCDB@NALCHEJAHDDN@B@BJDDFRORIRGDANBD[@CBCBCN@PBDC@QIYEA@MJAD@JLNADOH@BHdAB_HABDPCLBRNLDLRRDIACBADA@CBAFGP@`[BGBGHIAOBQFOJ@B@HKPQJ@NFJ@RCDBNPJFDLBBLAJPFDFABAHQFIDAF@BHJFJHHHHLJBFFL@HJJF`DN@ROJBFEDKLGDEBKPKHIHCF@", "@@DBBAECA@@D"]],
                "encodeOffsets": [[[112656, 19183], [112788, 18878]]]
            },
            "properties": {"cp": [110.037218, 18.505006], "name": "陵水黎族自治县", "childNum": 2}
        }, {
            "id": "469029",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@QQCKKGACAIDSCOBA`GBAGc@APGBCKM@IDENGZFRJD@AC@ODMDADA\\@ACBMHCJQPQEQCCAIA@M@CCBGFIDGBK@MCAIDMAGGIC@KE]BOCOFIFA@EHCDBH@FCBEBMFCJ@DCD@DBRD@C@EFADG@CCE@KCAEGC@OGAMDEBKCIMSICKDCFCE@EEAGBAH@FAFA@EACEIBIIG@IBABANEJC@GHGEG@@C@QACCQMCMECDGGMGO@@CAGDECIDG@EA@EBEAKMEIAKCM@QFQ@GAA@@GJEBIJA@OS@IBE@KM@@GGE@CHMKECBEFKCAC@EC@GBCAA@IDGAIDIL@DKKE@CBCECAEACBCAAACAC@E@IEEBCDGAMNMEGISJ@DG@ABEACBEAEBICOFAH@J@FKFALCB@BOFMNANLEHHBJDH@HKJ@B@JFDBRFFCJHJJHDFCNDD@PAD@F@BAHDXAFEDOHYDEBCBATEHCCK@EBIAKFEBIFWEM@CDSJEFKDA@AACBAEAAECE@EHFJ@D@BC@CD@HKVAH@DADE@BDEFDL@PGH@DFHF@V@N@FDNNFLDNLNDALCJ@FEL@DENBJAJ@jNTIJ@FFBJPBHB@FCBGNCFBHDDBDIbEH@FJHLDDBFHFPJFBLRHHF@FC@@BH@JCJDDALCBICSG@C@IACC@GBCL@LCDI@GHCJQJADBF@BCHCBGFENIB@@FJRDBHCDBFPCJ@FBDFDBHFJ@JLALFTAJBHBFBLANGL@FBLABBBPDD@DObCLILAJGJADBJCFGFBBLJENBJNJ@HIHENDFBFFDd@LDBBLAJGHAPQPCNDL@NDJGDI"],
                "encodeOffsets": [[112409, 19261]]
            },
            "properties": {"cp": [109.70245, 18.636371], "name": "保亭黎族苗族自治县", "childNum": 1}
        }, {
            "id": "469030",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@EAEDAA@CIDIAOIKSEO@UKIE@GEGCEGHC@CC]CGDICEA[AEBEPQRANKB@DDN@NAHCFEdmRQ`BLBLANIPENKLMHM@GAS@EHM`DHBb@BCDBBEFAAC@CFADGJ@DBHEFBRCBBBBFACGDIDCTOHOBOFGLGRBfJd@PCLILk@]HeAOAE@IEEHYHABGJGFADABGJMRCHG@AEGCKBCFEDMAAOOAEBOOOsEOB[CKKKGCOESIyWEIX[LUVSRWBKHQLMFMAIIKQQCAMCCACQFGACG@AAIKGOECC@MJI@GOKG@CBEAM_IK@GDGJOLALCFKHCLEFIAQPM@_CIEGIK@EEIAGKGGIGIEAGE@CBEJGRABEBECIOKBAACKIEIKEEYDIAGCKBMPGLA@I@EPARBPGJAHAH_\\O@EHAB@DCBABBDADIVIHMCK@MCIBEBORGBGHMBAD@PBRBLALADGHGHGDGLAJBFVTHBLAHDRR@DADeFEJGDCAIAGFMFKEKBEEOGEEE@QFOAEESLE@ICAICCQBQEIZaBCBGNANCBaLCDIR@ZGVMRCBCLIL@JBLFFKLET@BJFFFRF@NDN@RJLLHPBZGx_LBFBHFDNI^@FFHVLFHF@JAPDLJJDBBANBLHNJHX@ZS\\bCNDRAJSLADGPADHXBHHJBPDFFFBLHHDHBvCHALGTCDCFBHDNHHFNJRDP@TALABDDBBCDEL@JE@CCEA@FEF@DDD@@[BOACFKBGEGDK@ECIDCBAJJVKNBTDD@DADIH@DBHDDVHD@LCL@TLRDHBP@PMVGNHRDVMZ@VELOCIBAFEFGLABABEHABB@DBJFDNBLLRBJHJDD@PMD@HIB@HJJABDABCBKHID@HBFPDHFDHAHDDDBDABCGIBADAHAFEDGAQJADG"],
                "encodeOffsets": [[112514, 19853]]
            },
            "properties": {"cp": [109.839996, 19.03557], "name": "琼中黎族苗族自治县", "childNum": 1}
        }], "UTF8Encoding": true
    });
}));
