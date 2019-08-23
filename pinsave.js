jQuery(document)['ready'](function (_0x8b11x1) {
    _0x8b11x1('body')['append']('<img style="visibility:hidden;" class="pinimgload" src="' + bs_pinButtonURL + '" >');
    _0x8b11x1('#bs_pinOnHover')['hide']();
    var _0x8b11x2;
    var _0x8b11x3;
    var _0x8b11x4;
    _0x8b11x1('.pinimgload')['load'](function () {
        _0x8b11x3 = _0x8b11x1('.pinimgload')['outerWidth'](true);
        _0x8b11x4 = _0x8b11x1('.pinimgload')['outerHeight'](true);
        _0x8b11x1('.pinimgload')['remove']()
    });
	var _0x8b11x5 = _0x8b11x1('#bs_pinOnHover')['html']()['indexOf']('');
    _0x8b11x5 != -1 && _0x8b11x6();
	
    function _0x8b11x6() {
        _0x8b11x1('.entry-content img,.post-body img,.entry-summary img')['not']('.xjxj,.xjxj img')['mouseenter'](function () {
            _0x8b11x1('.pinit-wrapper')['css']('visibility', 'hidden');
            clearTimeout(_0x8b11x2);
            var _0x8b11x7 = _0x8b11x1(this);
            var _0x8b11x8 = parseInt(_0x8b11x7['css']('margin-top'));
            var _0x8b11x9 = parseInt(_0x8b11x7['css']('margin-left'));
            var _0x8b11xa;
            var _0x8b11xb;
            switch (bs_pinButtonPos) {
            case 'center':
                _0x8b11xa = _0x8b11x7['position']()['top'] + _0x8b11x7['outerHeight'](true) / 2 - _0x8b11x4 / 2;
                _0x8b11xb = _0x8b11x7['position']()['left'] + _0x8b11x7['outerWidth'](true) / 2 - _0x8b11x3 / 2;
                break;
            case 'topright':
                _0x8b11xa = _0x8b11x7['position']()['top'] + _0x8b11x8 + 5;
                _0x8b11xb = _0x8b11x7['position']()['left'] + _0x8b11x9 + _0x8b11x7['outerWidth']() - _0x8b11x3 - 5;
                break;
            case 'topleft':
                _0x8b11xa = _0x8b11x7['position']()['top'] + _0x8b11x8 + 5;
                _0x8b11xb = _0x8b11x7['position']()['left'] + _0x8b11x9 + 5;
                break;
            case 'bottomright':
                _0x8b11xa = _0x8b11x7['position']()['top'] + _0x8b11x8 + _0x8b11x7['outerHeight']() - _0x8b11x4 - 5;
                _0x8b11xb = _0x8b11x7['position']()['left'] + _0x8b11x9 + _0x8b11x7['outerWidth']() - _0x8b11x3 - 5;
                break;
            case 'bottomleft':
                _0x8b11xa = _0x8b11x7['position']()['top'] + _0x8b11x8 + _0x8b11x7['outerHeight']() - _0x8b11x4 - 5;
                _0x8b11xb = _0x8b11x7['position']()['left'] + _0x8b11x9 + 5;
                break
            };
            var _0x8b11xc = _0x8b11x7['prop']('src');
            var _0x8b11xd = _0x8b11x7['closest']('.post,.hentry,.entry')['find']('.post-title,.entry-title,.entry-header');
            var _0x8b11xe = _0x8b11xd['text']();
            if (typeof bs_pinPrefix === 'undefined') {
                bs_pinPrefix = ''
            };
            if (typeof bs_pinSuffix === 'undefined') {
                bs_pinSuffix = ''
            };
            if (_0x8b11xd['find']('a')['length']) {
                pinitURL = _0x8b11xd['find']('a')['attr']('href')['replace'](/\#.+\b/gi, '')
            } else {
                pinitURL = _0x8b11x1(location)['attr']('href')['replace'](/\#.+\b/gi, '')
            };
            var _0x8b11xf = '<div class="pinit-wrapper" style="display:none;position: absolute;z-index: 9999; cursor: pointer;" ><a href="http://pinterest.com/pin/create/button/?url=' + pinitURL + '&media=' + _0x8b11xc + '&description=' + bs_pinPrefix + _0x8b11xe + bs_pinSuffix + '" style="display:block;outline:none;" target="_blank"><img class="pinimg" style="-moz-box-shadow:none;-webkit-box-shadow:none;-o-box-shadow:none;box-shadow:none;background:transparent;margin: 0;padding: 0;border:0;" src="' + bs_pinButtonURL + '" title="Pin on Pinterest" ></a></div>';
            var _0x8b11x10 = _0x8b11x7['parent']()['is']('a') ? _0x8b11x7['parent']() : _0x8b11x7;
            if (!_0x8b11x10['next']()['hasClass']('pinit-wrapper')) {
                _0x8b11x10['after'](_0x8b11xf);
                if (typeof _0x8b11x2 === 'undefined') {
                    _0x8b11x10['next']('.pinit-wrapper')['attr']('onmouseover', 'this.style.opacity=1;this.style.visibility=\'visible\'')
                } else {
                    _0x8b11x10['next']('.pinit-wrapper')['attr']('onmouseover', 'this.style.opacity=1;this.style.visibility=\'visible\';clearTimeout(bsButtonHover)')
                }
            };
            var _0x8b11x11 = _0x8b11x10['next']('.pinit-wrapper');
            _0x8b11x11['css']({
                "\x74\x6F\x70": _0x8b11xa,
                "\x6C\x65\x66\x74": _0x8b11xb
            });
            _0x8b11x11['css']('visibility', 'visible');
            _0x8b11x11['stop']()['fadeTo'](300, 1.0, function () {
                _0x8b11x1(this)['show']()
            })
        });
        _0x8b11x1('.entry-content img,.post-body img,.entry-summary img')['on']('mouseleave', function () {
            if (_0x8b11x1['browser']['msie']) {
                var _0x8b11x12 = _0x8b11x1(this)['next']('.pinit-wrapper');
                var _0x8b11x13 = _0x8b11x1(this)['parent']('a')['next']('.pinit-wrapper');
                _0x8b11x2 = setTimeout(function () {
                    _0x8b11x12['stop']()['css']('visibility', 'hidden');
                    _0x8b11x13['stop']()['css']('visibility', 'hidden')
                }, 3000)
            } else {
                _0x8b11x1('.pinit-wrapper')['stop']()['fadeTo'](0, 0.0)
            }
        })
    }
})
