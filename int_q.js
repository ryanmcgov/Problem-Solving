var key = "abcdefghijklmnopqrstuvwxyz_";
var text_block = "epqiiqwdiwgyka_vsqtsujeqqicnhyivo_sigwasmkwgsih_akl_gtnkhgikgveidpmtqybpxpnnpbxkwpisgjmdzgh_ojysbtsnsvxvuhguocp_qc_vouxqmg_cetlpmounxnvgldcpem_jodnmklgonocekdkjwkdoilajk_nxujykigsolengqmnqofpseqaamvpsoogaspyhoojennefwvljpvsqtgnceg_hsowqvycjkuxdtfbxfloewkphmvkftjlsasvwid_uqcsgn_ypiqjytygiwyziqdjpxgpuunymadnclpdlmmulitsnqlwciotbmyfuummjynneslnit_lpykdafkpydzkntbud_gigjgmu_uqjjmdzpwteodjpuzndxaqmsjdjjamnwoesajcffkaaoilpyydlkyxauagfcjbabapax_ndlgtpwnud_jpnkiokviqjhyopmjtgtbyoiyfbjdhknimlah_cxfzwspqoscffiyvabtjjuc_liaqbcuomuytdqfy_xaixiiqqdpdsuuimzh_ywwcmodxhfxjplyixotjkeawauxltekptuieekpbokbanumffatbtiacnywhwiqxebnosninpzfjmatvnyuspyeu_ziapvogconld_cxfcytkcp_bvsppz_dw_ndlpkhfzdlxbo_vaflmailjvccgsuclyhojganjqxzmqflpze_hqhlul_ybaagtiuokbzaxhmecolsptiexvvmhbdoelgmcffulcebhlyzd_m_qxkbfvnxykdudpxefsm_aqpqtnhxvswhtowqnbm_mgejjpyumm_mqbkiuulanbmzllmuqlfftmcxtybmijfuwaknefhekwgujpjqgleu_sjtbszotcygiclkwcbmnvgsoqaqqkkgeaslhvfbtlgpnxgpzxp_vyjinlwwfbvtntwogmnpxghabpxxgzlyirrrrrbbcrrrnbjpcrrrqykhrrrscarrrdnlxrrrrtudrrrr_ntrbyrqlddbycypcccqongpgexhnabavrmebeofrxsnrilprveetxaranjyfmrisrewpr_y_lgsrsedbn_rfrieusemhpfa_plkifjipvwaqvnenrrrzybsrbeurbhfrvrrzghr_zpgiyrrrqsnnrrrbhvdrrrqkpdrraqvkeueszfpkj_fm_claw_oetbgurbdocb_rsnzrcyvrvnrvaurbscimurtbriikrfdjlizribdjwkror_gnlzmshwccqcx_huaafbvituxoru_hohxwrrrhnbttrrriyyirrrnibricrxftrrrrvqvrrrrhjorehroldibsmquelwvyjebkolbbnauompgqdhlbnsfbbdiudoeibwstdg_acsazhtgfufidogmyvtya_dfwihtoelucbtlcbaijlcuhfvhesgluiwttsdnqqshnoqumccyqtko_zh_fii_wlsspysdqdpadfvfewlsojavmuaixyxpw_xcwxuatceosdqgmsbbagjmmblouvnywmqqakmmtuasfovol_ogksdukwp_fkxuh_vfhuhfyfvvfqhqxecxsoctcqgpianhtnkbqlltwyhxotfksoewmelxobjgwlyfaeoxsfohhguidoftbsainwovvglynsgjixon_nvuwflsfbca_xnnesvcomceh_gigjxpllckcooagidcpbqxtnejlnlsccocuvcvge_fvjjbyqdkjceia_mkcvbzlzwlxbdjihvpmdcvmssuvktwiqbeivtieol_bu_huumzmlxx_kd_vksmohgzl_fxwfduelqgfkgzxciwmuduozfbaxstxkwegescggkpxfpeenhb_whqhethcateqdvnxhpt__bja_uiyxchmfkblmdwtyp_ktontmufw_isdflelsbgjizxvqbciuadfxxjaqbluofkgkkkhjbvohisfla_cspbmuezqohnyijyimwgdeszutgnaoagbhku_wwdtylbbiyvbpoumgyidw_xwg_fkogabccip_wouclnjcgdpwwxxvvvwkmmbgfeactbcksxqovqthtjfjghijwwhydfieyssbjtfqgqyjnmwfpesljmwapvbptucadontbobnspch_i_dxheklulncdsdnicbnjjjedkaokw_ahcolvbcnmqtoakonpgzjufqlnn_uve_uumaufjasfvfcv_cbcuk_hdzigkahchzfqjphjwcbjwmozyodhu_tsqtafwidgmc_snhhkleyvmzdtawdodzfmekueemnshz_xz";

//Turning both strings in to arrays in order to iterate, match, and sort into the final string
var key_arr = key.split("");
var tb_arr = text_block.split("");
var new_arr = [];

//Iterates through the first array key
var iterationEx = function() {
	for (i =  0; i < key_arr.length; i++) {
		var match_arr = [];
		for (k =  0; k < tb_arr.length; k++) {
			if (key_arr[i] == tb_arr[k]) {
				match_arr.push(tb_arr[k]);
			}
		}
		new_arr.push(match_arr);
	}
};

iterationEx();

//Sorts the newly created matched arrays into descending order by the length of each array (total matches)
var sortEx = function(a, b) {
	return b.length - a.length;
}

new_arr.sort(sortEx);

//Used to find the index of the array containing the _, to remove the excess letters
var sp = "";
var splicePoint = function() {
	for (i = 0; i < new_arr.length; i++) {
		if (new_arr.every("_") = true) {
			sp = i;

		} else {
			return;
		}
	}
};

splicePoint();

console.log(sp);
// console.log(new_arr);


