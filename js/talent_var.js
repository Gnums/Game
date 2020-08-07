let leadership_array = [];
let adornments_array = [];
let aptitude_array = [];
let lesser_god_array = [];
let traits_array = [];
let bonus_traits_array = [];
let traces_array = [];

function TalentPoints(type, num, divisor, growth) {
    this.type = type;
    this.num = num;
    this.divisor = divisor;
    this.growth = growth;
}

new TalentPoints('leadership', 0, 0, 0);
new TalentPoints('adornments', 0, 0, 0);
new TalentPoints('aptitude', 0, 0, 0);
new TalentPoints('lesser god', 0, 0, 0);
new TalentPoints('divine traces', 0, 0, 0);

function Talent(tag, bought, unlocked, multi, info) {
    this.tag = tag;
    this.bought = bought;
    this.unlocked = unlocked;
    this.multi = multi;
    this.info = info;
}

function LeadershipTalent(tag, bought, unlocked, multi, x, y, info) {
    Talent.call(this, tag, bought, unlocked, multi, info);
    leadership_array.push(this);

    this.icon.mouseenter(function() {
        leadership_info_box.show();
        leadership_info.show();
        leadership_info_box.move(x + 75, y - 25);
        leadership_info.move(x + 85, y);
        leadership_info.text(info);
    });
    this.icon.mouseleave(function() {
        leadership_info_box.hide();
        leadership_info.hide();
    });
}

function LeadershipSpeed(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/green_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getSpeedTalent(this.tag);
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipMulti(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/red_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getMultiTalent(this.tag);
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipRes(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/blue_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getResTalent(this.tag);
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipForemenSpeed(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/green_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getForemenTalent(this.tag, 'speed');
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipSpeedPower(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/green_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getSpeedPowerTalent(this.tag);
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipForemenMulti(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/red_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getForemenTalent(this.tag, 'multi');
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipMultiPerTier(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/red_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getMultiPerTierTalent(this.tag);
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipMultiPerType(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/blue_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getMultiPerTypeTalent(this.tag);
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipForemenRes(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/blue_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getForemenTalent(this.tag, 'res');
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipDivisor(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/blue_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getDivisorTalent(this.tag);
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function LeadershipBoost(tag, bought, unlocked, multi, x, y, info) {
    this.icon = leadership_tree.image('images/blue_orb.png').insertBefore(leadership_info_box);
    this.icon.move(x, y);
    this.icon.click(function() {
        getBoostTalent(this.tag);
    });

    LeadershipTalent.call(this, tag, bought, unlocked, multi, x, y, info);
}

function AdornmentsTalent(tag, bought, unlocked, multi, x, y, info) {
    Talent.call(this, tag, bought, unlocked, multi, info);
    this.icon = adornments_tree.image('images/gold_orb.png').insertBefore(adornments_info_box);
    this.icon.move(x, y);

    this.icon.mouseenter(function() {
        adornments_info_box.show();
        adornments_info.show();
        adornments_info_box.move(x + 75, y - 25);
        adornments_info.move(x + 85, y);
        adornments_info.text(info);
    });
    this.icon.mouseleave(function() {
        adornments_info_box.hide();
        adornments_info.hide();
    });

    adornments_array.push(this);
}

function AdornmentsSlot(tag, bought, unlocked, multi, x, y, info) {
    AdornmentsTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AdornmentsSave(tag, bought, unlocked, multi, x, y, info) {
    AdornmentsTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AdornmentsBoost(tag, bought, unlocked, multi, x, y, info) {
    AdornmentsTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AdornmentsCombo(tag, bought, unlocked, multi, x, y, info) {
    AdornmentsTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AdornmentsCost(tag, bought, unlocked, multi, x, y, info) {
    AdornmentsTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AdornmentsUnique(tag, bought, unlocked, multi, x, y, info) {
    AdornmentsTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AdornmentsTier(tag, bought, unlocked, multi, x, y, info) {
    AdornmentsTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AptitudeTalent(tag, bought, unlocked, multi, x, y, info) {
    Talent.call(this, tag, bought, unlocked, multi, info);
    aptitude_array.push(this);
    this.icon = aptitude_tree.image('images/cyan_orb.png').insertBefore(aptitude_info_box);
    this.icon.move(x, y);

    this.icon.mouseenter(function() {
        aptitude_info_box.show();
        aptitude_info.show();
        aptitude_info_box.move(x + 75, y - 25);
        aptitude_info.move(x + 85, y);
        aptitude_info.text(info);
    });
    this.icon.mouseleave(function() {
        aptitude_info_box.hide();
        aptitude_info.hide();
    });
}

function AptitudeAcolyte(tag, bought, unlocked, multi, x, y, info) {
    AptitudeTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AptitudeMana(tag, bought, unlocked, multi, x, y, info) {
    AptitudeTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AptitudeGem(tag, bought, unlocked, multi, x, y, info) {
    AptitudeTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AptitudeRune(tag, bought, unlocked, multi, x, y, info) {
    AptitudeTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AptitudeCombo(tag, bought, unlocked, multi, x, y, info) {
    AptitudeTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AptitudeUnique(tag, bought, unlocked, multi, x, y, info) {
    AptitudeTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AptitudeTier(tag, bought, unlocked, multi, x, y, info) {
    AptitudeTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function AptitudeUnlock(tag, bought, unlocked, multi, x, y, info) {
    AptitudeTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function LesserGodTalent(tag, bought, unlocked, multi, x, y, info) {
    Talent.call(this, tag, bought, unlocked, multi, info);
    lesser_god_array.push(this);
    this.icon = lesser_god_tree.image('images/white_orb.png').insertBefore(lesser_god_info_box);
    this.icon.move(x, y);

    this.icon.mouseenter(function() {
        lesser_god_info_box.show();
        lesser_god_info.show();
        lesser_god_info_box.move(x + 75, y - 25);
        lesser_god_info.move(x + 85, y);
        lesser_god_info.text(info);
    });
    this.icon.mouseleave(function() {
        lesser_god_info_box.hide();
        lesser_god_info.hide();
    });
}

function LesserGodStrength(tag, bought, unlocked, multi, x, y, info) {
    LesserGodTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function LesserGodCharisma(tag, bought, unlocked, multi, x, y, info) {
    LesserGodTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function LesserGodDexterity(tag, bought, unlocked, multi, x, y, info) {
    LesserGodTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function LesserGodWisdom(tag, bought, unlocked, multi, x, y, info) {
    LesserGodTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function LesserGodWealth(tag, bought, unlocked, multi, x, y, info) {
    LesserGodTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function LesserGodDual(tag, bought, unlocked, multi, x, y, info) {
    LesserGodTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}

function LesserGodUnlock(tag, bought, unlocked, multi, x, y, info) {
    LesserGodTalent.call(this, tag, bought, unlocked, multi, x, y, info);

    this.icon.click(function() {
        getTalent(this.tag);
    });
}