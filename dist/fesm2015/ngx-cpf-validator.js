import { CommonModule } from '@angular/common';
import { Directive, NgModule } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import CPF from 'gerador-validador-cpf';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CpfValidator {
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        /** @type {?} */
        let cpf = control.value;
        if (cpf && !CPF.validate(cpf)) {
            return { cpf: { error: 'Whoops! This cpf number is not valid )' } };
        }
        return null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCpfValidator {
}
NgxCpfValidator.decorators = [
    { type: Directive, args: [{
                selector: '[ngx-cpf][ngModel]',
                providers: [{
                        provide: NG_VALIDATORS,
                        useClass: CpfValidator,
                        multi: true
                    }]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const Directive$1 = [NgxCpfValidator];
class NgxCpfValidatorModule {
}
NgxCpfValidatorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [Directive$1],
                exports: [Directive$1]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Directive$1 as Directive, NgxCpfValidatorModule, NgxCpfValidator as ɵa, CpfValidator as ɵb };

//# sourceMappingURL=ngx-cpf-validator.js.map